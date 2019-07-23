package com.app.entities;

import javax.persistence.*;


@Entity
@Table(name = "amenity")
public class Amenity{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer amenityId;

    @Column(name = "amenity_name")
    private String amenity_name;

    public Integer getCost() {
        return cost;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    private Integer cost;

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
