package com.app.controller;


import com.app.entities.Room;

import com.app.services.RoomService;
import com.app.services.RoomtypeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.util.CustomErrorType;

import java.util.List;

@RestController
@RequestMapping(value = "/users/hotels", method = RequestMethod.GET)
public class RoomController {

    @Autowired
    RoomService roomService;

    @GetMapping("/rooms")
    public List<Room> getRooms() { return roomService.getRooms(); }

}
