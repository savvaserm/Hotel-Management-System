package com.app.entities;

import javax.persistence.*;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Date;

@Entity
@Table(name = "roomreservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer room_reservationId;

    private Double total;
    private String reservation_details;
    private Date start_date;
    private Date end_date;

    @ManyToOne
    @JoinColumn(name = "reservation_roomId", referencedColumnName = "roomId")
    private Room reservation_roomId;

    @ManyToOne
    @JoinColumn(name = "reservation_customerId", referencedColumnName = "customerId")
    private User reservation_customerId;

    @Override
    public String toString(){
        return "Reservation [id = " + room_reservationId + ", start date: " + start_date + ", end date: " + end_date
                + ", reservation details = " + reservation_details + ", total = " + total + "]";
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

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
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
