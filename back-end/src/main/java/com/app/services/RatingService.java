package com.app.services;

import com.app.dao.RatingRepository;
import com.app.dao.RoomRepository;
import com.app.dao.UserRepository;
import com.app.dto.RatingDto;
import com.app.entities.Rating;
import com.app.entities.Room;
import com.app.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    @Autowired
    RatingRepository ratingRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    UserRepository userRepository;

    public List<Rating> getRatings() {
        return ratingRepository.findAll();
    }

    public Rating rateRoom(RatingDto ratingDto) {

        Rating newRating = new Rating();

        Optional<Room> optRoom = roomRepository.findById(ratingDto.getRoomId());
        Room room = optRoom.get();

        Optional<User> optCustomer = userRepository.findById(ratingDto.getCustomerId());
        User customer = optCustomer.get();

        newRating.setRoomrating_customerId(customer);
        newRating.setRoomrating_roomId(room);
        newRating.setRating(ratingDto.getRating());
        newRating.setComments(ratingDto.getComments());

        System.out.println("Rating for " + room.getRoomNumber() + " submitted by " + customer.getLastname() + " " + customer.getFirstname() + "!");
        return ratingRepository.saveAndFlush(newRating);

    }


}
