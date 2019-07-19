package com.app.entities;

import javax.persistence.*;


@Entity
@Table(name = "hotel")
public class Hotel{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer hotelId ;

    private String hotel_name;


    public Hotel(){

    }

    public Hotel(String hotel_name){
        this.hotel_name = hotel_name;
    }


    @Override
    public String toString() {
        return "Hotel [id=" + hotelId + ",hotel name=" + hotel_name +
                "]";
    }

    public String getHotelName() {
        return hotel_name;
    }

    public void setHotelName(String hotel_name){
        this.hotel_name = hotel_name;
    }

    public void setId(Integer HotelID){
        this.hotelId = HotelID;
    }

    public Integer getId() {
        return hotelId;
    }



}
