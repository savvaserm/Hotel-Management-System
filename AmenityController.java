package com.app.controller;


import java.security.Principal;
import java.util.List;


import com.app.entities.Amenity;
import com.app.entities.Roomtype;
import com.app.services.AmenityService;
import com.app.services.RoomtypeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.util.CustomErrorType;


@RestController
@RequestMapping(value = "/users/hotels/rooms", method = RequestMethod.GET)
public class AmenityController {

    @Autowired
    private AmenityService amenityService;

    @GetMapping("/amenities")
    public List<Amenity> getAmenity() { return amenityService.getAmenity(); }

}
