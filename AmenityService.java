package com.app.services;

import com.app.dao.AmenityRepository;
import com.app.entities.Amenity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmenityService {

    private static final Logger logger = LoggerFactory.getLogger(AmenityService.class);

    @Autowired
    AmenityRepository amenityRepository;

    public List<Amenity> getAmenity() {
        return amenityRepository.findAll();
    }
}
