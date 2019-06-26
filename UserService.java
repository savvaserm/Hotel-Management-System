package com.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.UserRepository;
import com.app.entities.User;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> findUsermameOrPw(String username, String password) {
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


}
