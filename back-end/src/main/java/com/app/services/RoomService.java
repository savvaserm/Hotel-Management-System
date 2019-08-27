package com.app.services;

import com.app.dao.RoomRepository;
import com.app.dao.RoomtypeRepository;
import com.app.entities.Room;
import com.app.entities.Roomtype;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    RoomtypeRepository roomtypeRepository;


    public List<Room> getRooms(){ return roomRepository.findAll(); }


    public List<Room> getRoomsByRoomtype(Roomtype roomtype) {

        return roomRepository.findByRoomtypeId(roomtype);
    }
}
