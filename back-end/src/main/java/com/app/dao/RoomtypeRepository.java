package com.app.dao;

import com.app.entities.Roomtype;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface RoomtypeRepository extends JpaRepository<Roomtype, Integer> {


}
