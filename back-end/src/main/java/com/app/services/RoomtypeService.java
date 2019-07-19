package com.app.services;

import com.app.dao.RoomtypeRepository;
import com.app.entities.Roomtype;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomtypeService {

    @Autowired
    RoomtypeRepository roomtypeRepository;

    public List<Roomtype> getRoomtype(){ return roomtypeRepository.findAll(); }
}
