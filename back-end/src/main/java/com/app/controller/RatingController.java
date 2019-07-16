package com.app.controller;

import com.app.entities.Rating;
import com.app.services.RatingService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/users/hotels/rooms", method = RequestMethod.GET)
public class RatingController {

    @Autowired
    RatingService ratingService;

    @GetMapping("/rating")
    public List<Rating> getRatings() { return ratingService.getRatings(); }
}
