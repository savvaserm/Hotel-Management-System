package com.app.services;

import com.app.dao.RoomtypeRepository;
import com.app.entities.Roomtype;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomtypeService {

    @Autowired
    RoomtypeRepository roomtypeRepository;

    public List<Roomtype> getRoomtype(){ return roomtypeRepository.findAll(); }
}
