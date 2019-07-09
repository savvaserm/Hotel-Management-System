package com.app.entities;

import javax.persistence.*;


@Entity
@Table(name = "room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer roomId;

    private Integer room_number;

//    @ManyToOne
//    @JoinColumn(columnDefinition = "room_room_typeid")
    private Integer room_type;

//    @ManyToOne
//    @JoinColumn(columnDefinition = "room_hotelId")
    private Integer room_hotelid;

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




}
