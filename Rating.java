package com.app.entities;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "roomrating")
public class Rating {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer room_ratingId;

    private Double rating;
    private Date start_date;
    private Date end_date;

    private Integer rating_roomId;

    @Override
    public String toString() {
        return "Rating [id=" + room_ratingId + ", rating: " + rating + ", start date = "
                + start_date + ", end date = " + end_date + "]";
    }

    public Integer getRoom_ratingId() {
        return room_ratingId;
    }

    public void setRoom_ratingId(Integer room_ratingId) {
        this.room_ratingId = room_ratingId;
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



}
