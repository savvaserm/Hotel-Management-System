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


    LocalDate localDate = LocalDate.now();
    String message;
    Double total, price, discount;

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
        System.out.println("Reservations made by this user: " + count);
        if ( count >= 3) {
            customer.setType("REGULAR");
        } else {
            customer.setType("NEW");
        }

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

        if (!room.getAvailability()) {
            message = "Room not available at the moment!" ;
            System.out.println(message);


            //15% DISCOUNT STOUS REGULAR PELATES
        } else if (customer.getType().equals("REGULAR")) {

            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(reservationDto.getCheckin());
            reservation.setCheckout(reservationDto.getCheckout());
            reservation.getRoom().setAvailability(false);

            price = (double)reservation.getNights()*room.getRoom_roomtype().getPrice();
            discount = 15*price/100;
            total = price - discount;
            reservation.setTotal(total);

            message = "Room booked!";
            System.out.println(message);


            //NO DISCOUNT STOUS NEW PELATES
        } else if (customer.getType().equals("NEW")) {

            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(reservationDto.getCheckin());
            reservation.setCheckout(reservationDto.getCheckout());
            reservation.getRoom().setAvailability(false);

            total = (double)reservation.getNights()*room.getRoom_roomtype().getPrice();
            reservation.setTotal(total);

            message = "Room booked!";
            System.out.println(message);

        }
        return reservationRepository.save(reservation);
    }

}
