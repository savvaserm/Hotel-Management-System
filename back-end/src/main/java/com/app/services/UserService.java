package com.app.services;

import com.app.dao.ReservationRepository;
import com.app.dao.UserRepository;
import com.app.dto.UserDto;
import com.app.entities.User;

import com.app.util.UserAlreadyExistsException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;



import java.util.List;

@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);


    @Autowired
    private BCryptPasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    UserRepository userRepository;

    public List<User> findByUsernameOrPw(String username, String password) {
        return (List<User>) userRepository.findByUsernameOrPassword(username, password);
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User save(User user) {
        return userRepository.saveAndFlush(user);
    }

    public User update(User user) {
        return userRepository.save(user);
    }

    public User find(String username) {
        return userRepository.findOneByUsername(username);
    }

    public User findPw(String password) {
        return userRepository.findOneByPassword(password);
    }


    public User registerAccount(final UserDto accountDto) {

        if (find(accountDto.getUsername()) != null)
        {
            throw new UserAlreadyExistsException("Username already exists:" + accountDto.getUsername());

        }

        User newUser = new User();

        newUser.setFirstname(accountDto.getFirstname());
        newUser.setLastname(accountDto.getLastname());
        newUser.setUsername(accountDto.getUsername());
        newUser.setEmail(accountDto.getEmail());
        newUser.setPassword(encoder().encode(accountDto.getPassword()));
        newUser.setRole("USER");

        return userRepository.saveAndFlush(newUser);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }


}
