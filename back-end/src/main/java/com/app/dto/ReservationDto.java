package com.app.dto;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class ReservationDto {

    @NotNull
    private long roomId;

    @NotNull
    private long customerId;

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
