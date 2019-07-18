package com.app.dao;

import com.app.entities.Reservation;
import com.app.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDate;
import java.util.List;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    @Query(value = "SELECT r FROM Reservation r " +
            "WHERE r.room.id = :roomId AND " +
            "(:checkin BETWEEN r.checkin AND r.checkout) OR " +
            "(:checkout BETWEEN r.checkin AND r.checkout) OR " +
            "(:checkin <= r.checkin AND :checkout >= r.checkout)")
    List<Reservation> findByRoomAndDate(@Param("roomId") Room roomId, @Param("checkin") LocalDate checkin, @Param("checkout") LocalDate checkout);
}
