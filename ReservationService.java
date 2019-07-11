package com.app.services;

import com.app.dao.ReservationRepository;
import com.app.dao.RoomRepository;
import com.app.dao.UserRepository;
import com.app.entities.Reservation;
import com.app.entities.Room;
import com.app.entities.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

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


    public Reservation roomReservation(Room reservation_roomId, LocalDate checkin, LocalDate checkout, User reservation_customerId) {
        Reservation reservation = new Reservation();
        reservation.setReservation_roomId(reservation_roomId);
        reservation.setCheckin(checkin);
        reservation.setCheckout(checkout);
        reservation.setReservation_customerId(reservation_customerId);

        return reservationRepository.save(reservation);
    }
}
