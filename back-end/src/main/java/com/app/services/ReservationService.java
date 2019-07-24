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

    @Transactional
    public Reservation reserveRoom(ReservationDto reservationDto) {


        Optional<Room> optRoom = roomRepository.findById((int) reservationDto.getRoomId());
        Room room = optRoom.get();

        Optional<User> optCustomer = userRepository.findById((int) reservationDto.getCustomerId());
        User customer = optCustomer.get();

        LocalDate checkin = reservationDto.getCheckin();
        LocalDate checkout = reservationDto.getCheckout();

        Reservation reservation = new Reservation();

        Reservation res = reservationRepository.findByRoomAndDate(room.getRoomID(), checkin, checkout);


        if (checkin.isEqual(res.getCheckin()) && !room.getAvailability()) {
            message = "Room not available at the moment!" ;
            System.out.println(message);
        } else if (checkin.isAfter(res.getCheckout())) {
            reservation.setRoom(room);
            reservation.setCustomer(customer);
            reservation.setCheckin(reservationDto.getCheckin());
            reservation.setCheckout(reservationDto.getCheckout());
            reservation.getRoom().setAvailability(false);

            message = "Room booked!";
            System.out.println(message);
        }
        return reservationRepository.save(reservation);
    }

    // AYTO DOULEYEI

//        if (!room.getAvailability()) {
//            message = "Room not available at the moment!" ;
//            System.out.println(message);
//        } else {
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

}
