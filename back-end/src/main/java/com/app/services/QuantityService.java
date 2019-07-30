package com.app.services;

import com.app.dao.QuantityRepository;
import com.app.entities.Quantity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuantityService {

    @Autowired
    QuantityRepository quantityRepository;

    public List<Quantity> getQuantity() {
        return quantityRepository.findAll();
    }
}
