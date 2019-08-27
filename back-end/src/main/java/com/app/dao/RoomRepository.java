package com.app.dao;

import com.app.entities.Room;
import com.app.entities.Roomtype;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@Repository
@CrossOrigin (origins = "http://localhost:4200")
public interface RoomRepository extends JpaRepository<Room, Integer> {

    List<Room> findByRoomtypeId(@Param("room_roomtypeId") Roomtype roomtype);

}
