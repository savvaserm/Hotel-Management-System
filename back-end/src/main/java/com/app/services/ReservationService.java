package com.app.services;

import com.app.dao.ReservationRepository;
import com.app.dao.RoomRepository;
import com.app.dao.UserRepository;
import com.app.dto.ReservationDto;
import com.app.entities.Reservation;
import com.app.entities.Room;
import com.app.entities.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@SuppressWarnings("FieldCanBeLocal")
@Service
public class ReservationService {

    private static final Logger logger = LoggerFactory.getLogger(ReservationService.class);


    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    RoomService roomService;

    public List<Reservation> getReservations() {
        return reservationRepository.findAll();
    }

// -------------------------------------------------------------------------------------------

//    private String checkIfAvailable(Room room, LocalDate checkin, LocalDate checkout) {
//        LocalDate localDate = LocalDate.now();
//        reservationRepository.findByRoomAndDate(room, checkin, checkout);
//        if (!room.getAvailability()) {
//            return "Room is not available";
//        } else if (localDate.isAfter(checkout)) {
//            room.setAvailability(true);
//        }
//        return "";
//
//    }

//-------------------------------------------------------------------------------------------

    private long diffirence;
    private LocalDate localDate = LocalDate.now();
    private String message;
    private Double total, price;
    private Double discount, discount2, discount3;

    @Transactional
    public Reservation reserveRoom(ReservationDto reservationDto) {



        Optional<Room> optRoom = roomRepository.findById((int) reservationDto.getRoomId());
        Room room = optRoom.get();

        Optional<User> optCustomer = userRepository.findById((int) reservationDto.getCustomerId());
        User customer = optCustomer.get();

        LocalDate checkin = reservationDto.getCheckin();
        LocalDate checkout = reservationDto.getCheckout();

        Reservation reservation = new Reservation();

//        Reservation res = reservationRepository.findByRoomAndDate(room.getRoomID(), checkin, checkout);

        //AN O PELATIS EXEI PANW APO 3 RESERVATIONS TOTE EINAI REGULAR
        List<Reservation> reservations = reservationRepository.findByCustomer(customer);
        int count = reservations.size() + 1;
        System.out.println("Reservations made by " + customer.getLastname() + ": " + count);
        if ( count >= 3) {
            customer.setType("REGULAR");
        } else {
            customer.setType("NEW");
        }

        diffirence = checkin.getDayOfYear() - localDate.getDayOfYear();
        System.out.println("Diffirence :" + diffirence);

//        if (checkin.isEqual(res.getCheckin()) && room.getAvailability()) {
//            message = "Room is not available at the moment!" ;
//            System.out.println(message);
//        } else if (checkin.isAfter(res.getCheckout()) && customer.getType().equals("NEW")) {
//            reservation.setRoom(room);
//            reservation.setCustomer(customer);
//            reservation.setCheckin(reservationDto.getCheckin());
//            reservation.setCheckout(reservationDto.getCheckout());
//            reservation.getRoom().setAvailability(false);
//
//            message = "Room booked!";
//            System.out.println(message);
//        }
//        return reservationRepository.save(reservation);
//    }

    //------------------------------------------------------------------

        //AN TO KLEINEI 90 MERES NWRITERA EXEI 0% EKPTWSH,GIA 90 MEXRI 140 10%,GIA >140 20%
        if( diffirence < 90) {
            discount2 = 0.0;
        } else if ( 90 <= diffirence && diffirence <= 140 ) {
            discount2 = 0.1;
        } else {
            discount2 = 0.2;
        }

        if(room.getCancel()) {
            discount3 = 0.0;
            System.out.println("In case you want to cancel, no money can be returned");
        } else {
            discount3 = 0.25;
            System.out.println("If cancelled, money will be returned");
        }

        if (!room.getAvailability()) {
            message = "Room not available at the moment!" ;
            System.out.println(message);


            //15% DISCOUNT STOUS REGULAR PELATES
        } else if (customer.getType().equals("REGULAR")) {



            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(checkin);
            reservation.setCheckout(checkout);
            reservation.getRoom().setAvailability(false);

            message = "Room booked!";
            System.out.println(message);

            price = (double)reservation.getNights()*room.getRoom_roomtype().getPrice() + room.getRoom_roomtype().getPrice();
            discount = 15*price/100 + discount2*price + discount3*price;
            total = price - discount;
            reservation.setTotal(total);




            //NO DISCOUNT STOUS NEW PELATES
        } else if (customer.getType().equals("NEW")) {


            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(checkin);
            reservation.setCheckout(checkout);
            reservation.getRoom().setAvailability(false);

            price = (double)reservation.getNights()*room.getRoom_roomtype().getPrice() + room.getRoom_roomtype().getPrice();

            total = price - discount2*price - discount3*price;
            reservation.setTotal(total);

            message = "Room booked!";
            System.out.println(message);

        }
        return reservationRepository.save(reservation);
    }

    @Transactional
    public Reservation cancelRes(Reservation reservation) {

        Optional<Reservation> optRes = reservationRepository.findById(reservation.getRoom_reservationId());
        Reservation res = optRes.get();

        if(res.getRoom().getCancel()) {
            System.out.println("Reservation cancelled!");
            reservationRepository.delete(res);
        } else {
            System.out.println("Reservation cannot be cancelled!");
        }

        return res;
    }

}
