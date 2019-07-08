package com.app.entities;

import javax.persistence.*;


@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer RoomID;

    private Integer roomNumber;
    private Integer room_roomTypeID;
    private Integer room_hotelID;

    public Room(){}

    public Room(Integer roomNumber, Integer room_roomTypeID, Integer room_hotelID){
        this.roomNumber = roomNumber;
        this.room_roomTypeID = room_roomTypeID;
        this.room_hotelID = room_hotelID;
    }


}
