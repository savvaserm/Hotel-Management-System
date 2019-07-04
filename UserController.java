package com.app.controller;

import java.security.Principal;
import java.util.List;

import com.app.dto.UserDto;
import com.app.entities.Employee;
import com.app.services.EmployeeService;
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
import com.app.entities.User;
import com.app.dao.UserRepository;
import com.app.services.UserService;
import com.app.services.EmployeeService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping(value = "/users", method = RequestMethod.GET)
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;
    private EmployeeService employeeService;

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


    // ta emfanizei sto localhost:8080/employees

    @RequestMapping(value = "/employees", method = RequestMethod.GET)
    public List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    // request method to create a new account by a guest


    // metafora sto UserService -------------------------


//    @RequestMapping(value = "/register", method = RequestMethod.POST)
//    public ResponseEntity<?> createUser(@RequestBody User newUser) {
//
//        if (userService.find(newUser.getUsername()) != null)
//        {
//            logger.error("username already exist " + newUser.getUsername());
//            return new ResponseEntity<>(
//                    new CustomErrorType("user with username " + newUser.getUsername() + "already exist "),
//                    HttpStatus.CONFLICT);
//        }
//
//        newUser.setRole("USER");
//
//        return new ResponseEntity<User>(userService.save(newUser), HttpStatus.CREATED);
//    }



    // this is the login api/service

    @RequestMapping("/login")
    public Principal user(Principal principal) {
        logger.info("user logged " + principal);
        return principal;
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
