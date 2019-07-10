package com.app.entities;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "roomrating")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer roomratingId;

    private Double rating;
    private Date start_date;
    private Date end_date;

    @ManyToOne
    @JoinColumn(name = "roomrating_roomId", referencedColumnName = "roomId")
    private Room roomrating_roomId;

    @ManyToOne
    @JoinColumn(name = "roomrating_customerId", referencedColumnName = "customerId")
    private User roomrating_customerId;


    @Override
    public String toString() {
        return "Rating [id=" + roomratingId + ", rating: " + rating + ", start date = "
                + start_date + ", end date = " + end_date + "]";
    }

    public Integer getRoom_ratingId() {
        return roomratingId;
    }

    public void setRoom_ratingId(Integer roomratingId) {
        this.roomratingId = roomratingId;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
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

    public Room getRoomrating_roomId() {
        return roomrating_roomId;
    }

    public void setRoomrating_roomId(Room roomrating_roomId) {
        this.roomrating_roomId = roomrating_roomId;
    }

    public User getRoomrating_customerId() {
        return roomrating_customerId;
    }

    public void setRoomrating_customerId(User roomrating_customerId) {
        this.roomrating_customerId = roomrating_customerId;
    }


}
