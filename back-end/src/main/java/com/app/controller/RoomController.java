package com.app.controller;


import com.app.entities.Room;
import com.app.entities.Roomtype;
import com.app.services.RoomService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping(value = "/users/hotels", method = RequestMethod.GET)
public class RoomController {

    @Autowired
    RoomService roomService;

    @GetMapping("/rooms")
    public List<Room> getRooms() { return roomService.getRooms(); }

    @GetMapping("/rooms/{room_typeId}")
    public List<Room> getRooms(@PathVariable(name = "room_typeId") Roomtype roomtype) {
        return roomService.getRoomsByRoomtype(roomtype);
    }

}
