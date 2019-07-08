package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name = "roomtype")
public class Roomtype {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer RoomTypeID ;

    private String roomType;

    private Integer price;

    public Roomtype(){}

    public Roomtype(String roomType, Integer price){
        this.roomType = roomType;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Roomtype [id = " + RoomTypeID + ", roomtype = " + roomType + "]";
    }

    public Integer getPrice(){
        return price;
    }

    public void setPrice(Integer price){
        this.price = price;
    }

    public String getRoomType(){
        return roomType;
    }

    public void setRoomType(String roomType){
        this.roomType = roomType;
    }

    public void setRoomTypeID(Integer RoomTypeID){
        this.RoomTypeID = RoomTypeID;
    }

    public Integer getRoomTypeID(){
        return RoomTypeID;
    }


}
