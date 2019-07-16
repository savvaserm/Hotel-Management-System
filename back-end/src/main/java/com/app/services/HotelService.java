package com.app.services;

import com.app.dao.HotelRepository;
import com.app.entities.Hotel;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class HotelService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    HotelRepository hotelRepository;

    public List<Hotel> getHotels() { return hotelRepository.findAll(); }


}

