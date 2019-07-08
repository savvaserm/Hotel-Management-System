package com.app.services;

import com.app.dao.RoomRepository;
import com.app.entities.Room;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService {

    @Autowired
    RoomRepository roomRepository;

    public List<Room> getRooms(){ return roomRepository.findAll(); }
}
