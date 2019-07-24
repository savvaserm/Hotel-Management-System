package com.app.controller;

import com.app.dto.ReservationDto;
import com.app.entities.Reservation;
import com.app.entities.Room;
import com.app.services.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//    @RequestMapping(value = "/reserveroom", method = RequestMethod.POST)
//    @ResponseBody
//    public String roomReservation(@RequestParam(value = "param1") Room reservation_roomId,
//                                  @RequestParam(value = "param2") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkin, @RequestParam(value = "param3") @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkout,
//                                  @RequestParam(value = "param4") User reservation_customerId) throws NoAvailableRoomsException {
//        reservationService.roomReservation(reservation_roomId, checkin, checkout, reservation_customerId);
//        return "OK";
//    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//    public void reserveRoom(@RequestBody ReservationDto reservationDto, Room room, @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkin, @DateTimeFormat(pattern = "yyyy-MM-dd") LocalDate checkout) {

    @RequestMapping(value = "/reserveroom", method = RequestMethod.POST)
    public void reserveRoom(@RequestBody ReservationDto reservationDto) {
//        reservationService.checkIfAvailable(room, checkin, checkout);
        reservationService.reserveRoom(reservationDto);
    }

}
