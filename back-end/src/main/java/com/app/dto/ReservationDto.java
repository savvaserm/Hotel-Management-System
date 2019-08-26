package com.app.dto;

import com.app.entities.Amenity;
import com.app.entities.Room;
import com.app.entities.User;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

public class ReservationDto {

    @NotNull
    private Integer id;

    @NotNull
    private long roomId;

    @NotNull
    private long customerId;

    private LocalDate checkin;
    private LocalDate checkout;
    private String reservation_details;
    private Double total;
    private Set<Amenity> amenities;

    public ReservationDto() {
    }

    public ReservationDto(Integer id, String reservation_details, LocalDate checkin, LocalDate checkout) {
        this.setId(id);
        this.setReservation_details(reservation_details);
        this.setCheckin(checkin);
        this.setCheckout(checkout);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public long getRoomId() {
        return roomId;
    }

    public void setRoomId(long roomId) {
        this.roomId = roomId;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
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

    public Set<Amenity> getAmenity() {
        return amenities;
    }

    public void setAmenity(Set<Amenity> amenities) {
        this.amenities = amenities;
    }

    @Override
    public String toString() {
        return "ReservationDto{" +
                "roomId=" + roomId +
                ", customerId=" + customerId +
                ", checkin=" + checkin +
                ", checkout=" + checkout +
                ", reservation_details='" + reservation_details + '\'' +
                ", total=" + total +
                '}';
    }
}
