package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name = "roomtype")
public class Roomtype {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer room_typeId ;

    private String room_type;

    private Integer price;

    public Roomtype(){}

    public Roomtype(String room_type, Integer price){
        this.room_type = room_type;
        this.price = price;
    }

    @Override
    public String toString() {
        return "Roomtype [id = " + room_typeId + ", roomtype = " + room_type + "]";
    }

    public Integer getPrice(){
        return price;
    }

    public void setPrice(Integer price){
        this.price = price;
    }

    public String getRoomType(){
        return room_type;
    }

    public void setRoomType(String room_type){
        this.room_type = room_type;
    }

    public void setRoomTypeID(Integer room_typeid){
        this.room_typeId = room_typeid;
    }

    public Integer getRoomTypeID(){
        return room_typeId;
    }


}
