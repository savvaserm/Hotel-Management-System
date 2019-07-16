package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.app.entities.Room;
import com.app.entities.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

public class ReservationDto {

    @NotNull
    private Room reservation_roomId;

    @NotNull
    private User reservation_customerId;

    private LocalDate checkin;
    private LocalDate checkout;
    private String reservation_details;
    private Double total;


    public LocalDate getCheckin() {
        return checkin;
    }

    public void setCheckin(LocalDate checkin) {
        this.checkin = checkin;
    }

    public LocalDate getCheckout() {
        return checkout;
    }

    public void setCheckout(LocalDate checkout) {
        this.checkout = checkout;
    }

    public  Room getReservation_roomId() {
        return reservation_roomId;
    }

    public void setReservation_roomId(Room reservation_roomId) {
        this.reservation_roomId = reservation_roomId;
    }

    public User getReservation_customerId() {
        return reservation_customerId;
    }

    public void setReservation_customerId(User reservation_customerId) {
        this.reservation_customerId = reservation_customerId;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public String getReservation_details() {
        return reservation_details;
    }

    public void setReservation_details(String reservation_details) {
        this.reservation_details = reservation_details;
    }


    @Override
    public String toString() {
        return "Reservation [room id=" + reservation_roomId + ", customer id =" + reservation_customerId + ", checkin =" + checkin + ", checkout =" + checkout +
                ",]";
    }
}
