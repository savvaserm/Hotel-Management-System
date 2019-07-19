package com.app.controller;


import java.security.Principal;
import java.util.List;

import com.app.entities.Amenity;
import com.app.services.AmenityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/users/hotels/rooms", method = RequestMethod.GET)
public class AmenityController {

    @Autowired
    private AmenityService amenityService;

    @GetMapping("/amenities")
    public List<Amenity> getAmenity() { return amenityService.getAmenity(); }

}
