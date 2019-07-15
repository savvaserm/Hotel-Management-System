package com.app.entities;

import javax.persistence.*;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "roomreservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer room_reservationId;

    private Double total;
    private String reservation_details;
    private LocalDate checkin;
    private LocalDate checkout;

    @ManyToOne
    @JoinColumn(name = "reservation_roomId", referencedColumnName = "roomId")
    private Room reservation_roomId;

    @ManyToOne
    @JoinColumn(name = "reservation_customerId", referencedColumnName = "customerId")
    private User reservation_customerId;

    @Override
    public String toString(){
        return "Reservation [id = " + room_reservationId + ", checkin: " + checkin + ", checkout: " + checkout
                + ", reservation details = " + reservation_details + ", total = " + total + "]";
    }

    public Reservation(){}

    public Reservation(Integer room_reservationId, Double total, String reservation_details, LocalDate checkin, LocalDate checkout, Room reservation_roomId,
                       User reservation_customerId ){
        this.setRoom_reservationId(room_reservationId);
        this.setTotal(total);
        this.setReservation_details(reservation_details);
        this.setCheckin(checkin);
        this.setCheckout(checkout);
        this.setReservation_roomId(reservation_roomId);
        this.setReservation_customerId(reservation_customerId);
    }

    public Integer getRoom_reservationId() {
        return room_reservationId;
    }

    public void setRoom_reservationId(Integer room_reservationId) {
        this.room_reservationId = room_reservationId;
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

    public Room getReservation_roomId() {
        return reservation_roomId;
    }

    public void setReservation_roomId(Room reservation_roomId) {
        this.reservation_roomId =reservation_roomId;
    }

    public User getReservation_customerId() {
        return reservation_customerId;
    }

    public void setReservation_customerId(User reservation_customerId) {
        this.reservation_customerId = reservation_customerId;
    }

}
