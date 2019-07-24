package com.app.dto;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class RoomDto {

   @NotNull
   private int id;

   private int room_number;
   private int hotelId;
   private int roomtypeId;
   private boolean available;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getRoom_number() {
        return room_number;
    }

    public void setRoom_number(int room_number) {
        this.room_number = room_number;
    }

    public int getHotelId() {
        return hotelId;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public int getRoomtypeId() {
        return roomtypeId;
    }

    public void setRoomtypeId(int roomtypeId) {
        this.roomtypeId = roomtypeId;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    @Override
    public String toString() {
        return "RoomDto{" +
                "id=" + id +
                ", room_number=" + room_number +
                ", hotelId=" + hotelId +
                ", roomtypeId=" + roomtypeId +
                ", available=" + available +
                '}';
    }
}
