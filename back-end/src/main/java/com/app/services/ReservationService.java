package com.app.services;

import com.app.dao.ReservationRepository;
import com.app.dao.RoomRepository;
import com.app.dao.UserRepository;
import com.app.dto.ReservationDto;
import com.app.entities.Reservation;
import com.app.entities.Room;
import com.app.entities.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    private static final Logger logger = LoggerFactory.getLogger(ReservationService.class);


    @Autowired
    ReservationRepository reservationRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoomRepository roomRepository;

    @Autowired
    RoomService roomService;

    public List<Reservation> getReservations() {
        return reservationRepository.findAll();
    }


//    public Reservation roomReservation(Room reservation_roomId, LocalDate checkin, LocalDate checkout, User reservation_customerId) {
//        if (!reservation_roomId.getAvailability()) {
//            throw new NoAvailableRoomsException("Room not available!");
//        }
//
//            Reservation reservation = new Reservation();
//
//            reservation.setRoom(reservation.getRoom());
//            reservation.setCheckin(reservation.getCheckin());
//            reservation.setCheckout(reservation.getCheckout());
//            reservation.setCustomer(reservation.getCustomer());
//            reservation_roomId.setAvailability(false);
//            return reservationRepository.save(reservation);
//
//    }

    @Transactional
    public Reservation reserveRoom(ReservationDto reservationDto) {

//        if(!reservationDto.getRoom().getAvailability()) {
//            throw new NoAvailableRoomsException("Room not available!");
//        }

        Reservation reservation = new Reservation();


        Optional<Room> optRoom = roomRepository.findById((int) reservationDto.getRoomId());
        Room room = optRoom.get();

        Optional<User> optCustomer = userRepository.findById((int)reservationDto.getCustomerId());
        User customer = optCustomer.get();

        reservation.setRoom(room);
        reservation.setCustomer(customer);
        reservation.setCheckin(reservationDto.getCheckin());
        reservation.setCheckout(reservationDto.getCheckout());
//      reservation.getRoom().setAvailability(false);


        return reservationRepository.save(reservation);
    }

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    private List<Reservation> checkIfAvailable(Room roomId, LocalDate checkin, LocalDate checkout) {
        return reservationRepository.findByRoomAndDate(roomId, checkin, checkout);

    }

}
