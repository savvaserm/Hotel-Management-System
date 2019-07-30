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

//    private Reservation checkIfAvailable(Room room, LocalDate checkin, LocalDate checkout) {
//        ReservationDto reservationDto = new ReservationDto();
//        LocalDate start;
//        start = reservationDto.getCheckin();
//        reservationRepository.findByRoomAndDate(room, checkin, checkout);
//        if (!room.getAvailability() && start.isEqual(checkin)) {
//            System.out.println("Room not available at given dates!");
//        } else if (start.isAfter(checkout)) {
//            room.setAvailability(true);
//        }
//        return res;
//    }

// -------------------------------------------------------------------------------------------

    private Integer quantity;
    private Double extraCost;
    private long difference;
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

        //AN O PELATIS EXEI PANW APO 3 RESERVATIONS TOTE EINAI REGULAR
        List<Reservation> reservations = reservationRepository.findByCustomer(customer);
        int count = reservations.size() + 1;
        System.out.println("\nReservations made by " + customer.getLastname() + ": " + count);
        if (count >= 3) {
            customer.setType("REGULAR");
        } else {
            customer.setType("NEW");
        }

        difference = checkin.getDayOfYear() - localDate.getDayOfYear();
        System.out.println("Difference: " + difference);


        //AN TO KLEINEI 90 MERES NWRITERA EXEI 0% EKPTWSH,GIA 90 MEXRI 140 10%,GIA >140 20%
        if (difference < 90) {
            discount2 = 0.0;
        } else if (difference <= 140) {
            discount2 = 0.1;
        } else {
            discount2 = 0.2;
        }

        if (room.getCancel()) {
            discount3 = 0.0;
            System.out.println("If reservation is cancelled, money will be refunded");

        } else {
            discount3 = 0.25;
            System.out.println("If reservation is cancelled, no money can be refunded");
        }

        quantity = room.getRoom_roomtype().getQuantity().getAmount();
        if (quantity < 1) {
            extraCost = 40.0;
        } else if (quantity < 3) {
            extraCost = 20.0;
        } else {
            extraCost = 0.0;
        }


        //DEN VRISKEI TO ROOM ID, CHECKAREI MONO TIS HMEROMHNIES KAI STELNEI PISW OLA TA RESERVATIONS GIAYTES TIS HMEROMHNIES
        List<Reservation> checkRes = reservationRepository.findByRoomAndDate(room, checkin, checkout);
        if (checkRes.size() >= 1) {
            System.out.println("Reservations for given dates: " + checkRes.size());
        } else {
            room.setAvailability(true);

        }

        if (!room.getAvailability()) {

            message = "Room is not available at given dates!";
            System.out.println(message);

            //15% DISCOUNT STOUS REGULAR PELATES
        } else if (customer.getType().equals("REGULAR")) {

            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(checkin);
            reservation.setCheckout(checkout);
            reservation.getRoom().setAvailability(false);
            room.getRoom_roomtype().getQuantity().setAmount(quantity - 1);

            message = "Room booked!";
            quantity = room.getRoom_roomtype().getQuantity().getAmount();
            price = (double) reservation.getNights() * room.getRoom_roomtype().getPrice() + room.getRoom_roomtype().getPrice();
            discount = 15 * price / 100 + discount2 * price + discount3 * price;
            total = price - discount + extraCost;
            reservation.setTotal(total);


            reservation.setReservation_details("Hotel: " + room.getRoom_hotelId().getHotelName() + ", room number: " + room.getRoomNumber() + ", customer: " + customer.getLastname() + ", checkin: " + checkin +
                    ", reserved for " + reservation.getNights() + " nights" + ", total price: " + reservation.getTotal() + " $, " + "\nRefund if cancelled: " + room.getCancel());

            System.out.println(room.getRoom_roomtype().getRoomType() + " left: " + quantity + ", extra cost(depends on the availability): " + extraCost);
            System.out.println(reservation.getReservation_details());
            System.out.println(message);


            //NO DISCOUNT STOUS NEW PELATES
        } else if (customer.getType().equals("NEW")) {


            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(checkin);
            reservation.setCheckout(checkout);
            reservation.getRoom().setAvailability(false);
            room.getRoom_roomtype().getQuantity().setAmount(quantity - 1);


            price = (double) reservation.getNights() * room.getRoom_roomtype().getPrice() + room.getRoom_roomtype().getPrice();
            total = price - discount2 * price - discount3 * price + extraCost;
            reservation.setTotal(total);
            message = "Room booked!";


            reservation.setReservation_details("Hotel: " + room.getRoom_hotelId().getHotelName() + ", room number: " + room.getRoomNumber() + ", customer: " + customer.getLastname() + ", checkin: " + checkin +
                    ", reserved for " + reservation.getNights() + " nights" + ", total price: " + reservation.getTotal() + " $, " + "\nRefund if cancelled: " + room.getCancel());

            quantity = room.getRoom_roomtype().getQuantity().getAmount();
            System.out.println(room.getRoom_roomtype().getRoomType() + " left: " + quantity + ", extra cost(depends on the availability): " + extraCost);
            System.out.println(reservation.getReservation_details());
            System.out.println(message);
        }

        return reservationRepository.save(reservation);
    }

    @Transactional
    public Reservation cancelRes(Reservation reservation) {

        Optional<Reservation> optRes = reservationRepository.findById(reservation.getRoom_reservationId());
        Reservation res = optRes.get();

        if (res.getRoom().getCancel()) {

            reservationRepository.delete(res);
            res.getRoom().setAvailability(true);
            res.getRoom().getRoom_roomtype().getQuantity().setAmount(quantity + 1);
            System.out.println("\nReservation with id: [" + res.getRoom_reservationId() + "]    cancelled (MONEY WILL BE REFUNDED)!");

        } else {

            reservationRepository.delete(res);
            res.getRoom().setAvailability(true);
            res.getRoom().getRoom_roomtype().getQuantity().setAmount(quantity + 1);
            System.out.println("\nReservation with id: [" + res.getRoom_reservationId() + "]    cancelled (MONEY WONT BE REFUNDED)!");

        }

        return res;
    }

}
