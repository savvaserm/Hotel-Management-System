package com.app.services;
import com.app.dao.ReservationRepository;
import com.app.entities.Reservation;
import com.app.entities.Room;
import com.app.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;

public class CheckAvailability {

    @Autowired
    ReservationRepository reservationRepository;

    public void checkIfAvailable(Room id, LocalDate checkin, LocalDate checkout) {
        reservationRepository.findByRoomAndDate(id, checkin, checkout);
    }

}
