package com.app.controller;


import java.security.Principal;
import java.util.List;


import com.app.entities.Hotel;
import com.app.services.HotelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.util.CustomErrorType;


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
