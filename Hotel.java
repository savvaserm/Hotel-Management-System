package com.app.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;



@Entity
@Table(name = "hotel")
public class Hotel{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long HotelID ;

    private String hotelName;


    public Hotel(){

    }

    public Hotel(String hotelName){
        this.hotelName = hotelName;
    }


    @Override
    public String toString() {
        return "Hotel [id=" + HotelID + ",hotel name=" + hotelName +
                ",]";
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName){
        this.hotelName = hotelName;
    }

    public void setId(Long HotelID){
        this.HotelID = HotelID;
    }

    public Long getId() {
        return HotelID;
    }



}
