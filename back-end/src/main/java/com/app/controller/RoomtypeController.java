package com.app.controller;


import java.util.List;


import com.app.entities.Roomtype;
import com.app.services.RoomtypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/users/hotels", method = RequestMethod.GET)
public class RoomtypeController {

    @Autowired
    private RoomtypeService roomtypeService;

    @GetMapping("/roomtypes")
    public List<Roomtype> getRoomtype(){ return roomtypeService.getRoomtype(); }
}
