package com.app.controller;

import java.security.Principal;
import java.util.List;

import com.app.entities.Quantity;
import com.app.services.QuantityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/users", method = RequestMethod.GET)
public class QuantityController {

    @Autowired
    private QuantityService quantityService;

    @GetMapping("/hotels/roomtypes/quantity")
    public List<Quantity> getQuantity() {
        return quantityService.getQuantity();
    }
}
