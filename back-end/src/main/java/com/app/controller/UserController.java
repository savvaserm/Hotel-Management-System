package com.app.controller;

import java.security.Principal;
import java.util.List;

import com.app.dto.UserDto;
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

import com.app.entities.User;
import com.app.dao.UserRepository;
import com.app.services.UserService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/users", method = RequestMethod.GET)
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


//    @RequestMapping(path="/users", method = RequestMethod.GET)
//    public ResponseEntity<User>  listUser(){
//        return new ResponseEntity<User>(userService.getUsers());
//    }
//
//    @RequestMapping(path="/users/{id}", method = RequestMethod.GET)
//    public ResponseEntity  listUser(@PathVariable(value = "id") String id){
//        return new ResponseEntity(userService.getUsers().stream().filter(user -> user.getId().equals(id)).findFirst().orElse(null), HttpStatus.OK);
//
//    }
//
//    @RequestMapping(path="/users", method = RequestMethod.POST)
//    public ResponseEntity  listUser(@RequestBody User user){
//        return new ResponseEntity("18", HttpStatus.OK);
//    }
//
    //--------------------------------------------------------------------------------


    @GetMapping("/list")
    public List<User> getUsers() {
        return userService.getUsers();
    }



    // this is the login api/service

    @RequestMapping("/login")
    public Principal user(Principal principal) {
        logger.info("user logged " + principal);
        return principal;
    }

    @GetMapping("/list/{username}")
    public User getUserByUsername(@PathVariable(name = "username") String username) {
        return userService.findByUsername(username);
    }

    @RequestMapping(value="/logout", method = RequestMethod.POST)
    public String logoutPage(HttpServletRequest request, HttpServletResponse response){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if(auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login";
    }

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public void register(@RequestBody UserDto userDto){
        userService.registerAccount(userDto);
    }
}
