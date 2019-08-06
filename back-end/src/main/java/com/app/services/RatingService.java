package com.app.services;

import com.app.dao.RatingRepository;
import com.app.dto.RatingDto;
import com.app.entities.Rating;
import com.app.entities.Room;
import com.app.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    @Autowired
    RatingRepository ratingRepository;

    public List<Rating> getRatings() {
        return ratingRepository.findAll();
    }

    public Rating rateRoom(RatingDto ratingDto) {

        Rating newRating = new Rating();

        Room room = ratingDto.getRoomId();
        User user = ratingDto.getCustomerId();

        newRating.setRoomrating_customerId(user);
        newRating.setRoomrating_roomId(room);
        newRating.setRating(ratingDto.getRating());
        newRating.setComments(ratingDto.getComments());

        System.out.println("Rating for: " + "submitted!");
        return ratingRepository.saveAndFlush(newRating);

    }


}
