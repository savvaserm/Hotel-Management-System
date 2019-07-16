package com.app.dao;

import com.app.entities.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@Repository
@CrossOrigin (origins = "http://localhost:4200")
public interface RoomRepository extends JpaRepository<Room, Integer> {

}
