package com.app.controller;


import java.security.Principal;
import java.util.List;


import com.app.entities.Hotel;
import com.app.services.HotelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import com.app.util.CustomErrorType;
import com.app.dao.UserRepository;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(value = "/users", method = RequestMethod.GET)
public class HotelController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotels")
    public List<Hotel> getHotels() {
        return hotelService.getHotels();
    }
}
