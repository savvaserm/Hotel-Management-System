package com.app.entities;

import javax.persistence.*;
import java.time.LocalDate;

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
    private Room room;

    @ManyToOne
    @JoinColumn(name = "reservation_customerId", referencedColumnName = "customerId")
    private User customer;

    @Override
    public String toString() {
        return "Reservation [id = " + room_reservationId + ", checkin: " + checkin + ", checkout: " + checkout
                + ", reservation details = " + reservation_details + ", total = " + total + "]";
    }

    public Reservation() {
    }

    public Reservation(Integer id, String reservation_details, LocalDate checkin, LocalDate checkout, Room room,
                       User customer) {
        this.setRoom_reservationId(id);
        this.setReservation_details(reservation_details);
        this.setCheckin(checkin);
        this.setCheckout(checkout);
        this.setRoom(room);
        this.setCustomer(customer);
    }

    public Double getTotal() {
        return ((double) room.getRoom_roomtype().getPrice() + room.getRoom_roomtype().getPrice() * getNights());
    }

    public int getNights() {
        return (checkout.getDayOfMonth() - checkin.getDayOfMonth());
    }

    public Integer getRoom_reservationId() {
        return room_reservationId;
    }

    public void setRoom_reservationId(Integer room_reservationId) {
        this.room_reservationId = room_reservationId;
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

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

}
