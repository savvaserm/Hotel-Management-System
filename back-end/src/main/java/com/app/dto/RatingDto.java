package com.app.dto;

import com.app.entities.Room;
import com.app.entities.User;

import javax.validation.constraints.NotNull;

public class RatingDto {

    @NotNull
    private Integer id;

    private Integer rating;
    private String comments;
    private int roomId;
    private int customerId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    @Override
    public String toString() {
        return "RatingDto{" +
                "id=" + id +
                ", rating=" + rating +
                ", comments='" + comments + '\'' +
                ", roomId=" + roomId +
                ", customerId=" + customerId +
                '}';
    }
}
