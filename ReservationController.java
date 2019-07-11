package com.app.controller;

import com.app.entities.Reservation;
import com.app.entities.Room;
import com.app.entities.User;
import com.app.services.ReservationService;

import com.app.util.NoAvailableRoomsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/users/hotels", method = RequestMethod.GET )
public class ReservationController {

    @Autowired
    ReservationService reservationService;

    @GetMapping("/reservations")
    public List<Reservation> getReservations() { return reservationService.getReservations(); }

    @RequestMapping(method = RequestMethod.GET, value = "/reserveroom")
    @ResponseBody
    public String roomReservation(@RequestParam(value = "reservation_roomId") Room reservation_roomId,
                                  @RequestParam(value = "checkin") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkin, @RequestParam(value = "checkout") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkout,
                                  @RequestParam(value = "reservation_customerId") User reservation_customerId) throws NoAvailableRoomsException {
        reservationService.roomReservation(reservation_roomId, checkin, checkout, reservation_customerId);
        return "OK";
    }


}
