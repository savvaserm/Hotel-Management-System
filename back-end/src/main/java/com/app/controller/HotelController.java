package com.app.controller;


import java.security.Principal;
import java.util.List;


import com.app.entities.Hotel;
import com.app.services.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/users", method = RequestMethod.GET)
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotels")
    public List<Hotel> getHotels() {
        return hotelService.getHotels();
    }
}
