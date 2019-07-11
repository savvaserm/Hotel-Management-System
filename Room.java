package com.app.entities;

import javax.persistence.*;


@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer roomId;

    private Integer room_number;
    private Boolean available;

    @ManyToOne
    @JoinColumn(name = "room_roomtypeId", referencedColumnName = "room_typeId")
    private Roomtype room_roomtypeId;

    @ManyToOne
    @JoinColumn(name = "room_hotelId", referencedColumnName = "hotelId")
    private Hotel room_hotelId;

    public Integer getRoomID() {
        return roomId;
    }

    public void setRoomID(Integer roomId){
        this.roomId = roomId;
    }

    public Integer getRoomNumber() {
        return room_number;
    }

    public void setRoomNumber(Integer room_number) {
        this.room_number = room_number;
    }

    public Roomtype getRoom_roomtype() {
        return room_roomtypeId;
    }

    public void setRoom_roomtype(Roomtype room_roomtypeId) {
        this.room_roomtypeId = room_roomtypeId;
    }

    public Hotel getRoom_hotelId() {
        return room_hotelId;
    }

    public void setRoom_hotelId(Hotel room_hotelId) {
        this.room_hotelId = room_hotelId;
    }

    public boolean getAvailability() {
        return available;
    }

    public void setAvailability(Boolean available) {
        this.available = available;
    }

}
