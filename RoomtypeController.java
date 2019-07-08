package com.app.controller;


import java.security.Principal;
import java.util.List;


import com.app.entities.Roomtype;
import com.app.services.RoomtypeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.util.CustomErrorType;


@RestController
@RequestMapping(value = "/users/hotels", method = RequestMethod.GET)
public class RoomtypeController {

    @Autowired
    private RoomtypeService roomtypeService;

    @GetMapping("/roomtypes")
    public List<Roomtype> getRoomtype(){ return roomtypeService.getRoomtype(); }
}
