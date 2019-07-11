package com.app.dao;

import com.app.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDate;
import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
