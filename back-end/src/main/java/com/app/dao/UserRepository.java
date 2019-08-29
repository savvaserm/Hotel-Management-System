package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.User;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Integer> {

     List<User> findByUsernameOrPassword(String username, String passowrd);
     User findOneByUsername(String username);
     User findOneByPassword(String password);
     User findByUsername(String username);

}
