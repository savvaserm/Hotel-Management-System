package com.app.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;



@Entity
@Table(name = "hotel")
public class Hotel{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer hotelId ;

    private String hotel_name;


    public Hotel(){

    }

    public Hotel(String hotelName){
        this.hotel_name = hotelName;
    }


    @Override
    public String toString() {
        return "Hotel [id=" + hotelId + ",hotel name=" + hotel_name +
                "]";
    }

    public String getHotelName() {
        return hotel_name;
    }

    public void setHotelName(String hotelName){
        this.hotel_name = hotelName;
    }

    public void setId(Integer HotelID){
        this.hotelId = HotelID;
    }

    public Integer getId() {
        return hotelId;
    }



}
