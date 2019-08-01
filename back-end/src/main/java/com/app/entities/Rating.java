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

    private String comments;

    @ManyToOne
    @JoinColumn(name = "roomrating_roomId", referencedColumnName = "roomId")
    private Room roomrating_roomId;

    @ManyToOne
    @JoinColumn(name = "roomrating_customerId", referencedColumnName = "customerId")
    private User roomrating_customerId;


    @Override
    public String toString() {
        return "Rating [id=" + roomratingId + ", rating: " + rating + ", comments: " + comments + "]";
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

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
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
