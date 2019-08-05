package com.app.entities;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name = "amenity")
public class Amenity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer amenityId;

    @Column(name = "amenity_name")
    private String amenity_name;

    private Integer cost;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "reservation_amenities", joinColumns = @JoinColumn(name = "amenity", referencedColumnName = "amenityId"), inverseJoinColumns = @JoinColumn(name = "reservation", referencedColumnName = "room_reservationId"))
    private Set<Reservation> reservation;


    public Set<Reservation> getReservations() {
        return reservation;
    }

    public void setReservations(Set<Reservation> reservations) {
        this.reservation = reservations;
    }

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }



    public Integer getAmenityId() {
        return amenityId;
    }

    public void setAmenityId(Integer amenityId) {
        this.amenityId = amenityId;
    }

    public String getAmenity_name() {
        return amenity_name;
    }

    public void setAmenity_name(String amenity_name) {
        this.amenity_name = amenity_name;
    }

    public String toString() {
        return "Amenity [id=" + amenityId + ", amenity name=" + amenity_name + "]";
    }
}
