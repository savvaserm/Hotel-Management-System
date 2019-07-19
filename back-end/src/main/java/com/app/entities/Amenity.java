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

    public Integer getAmenityID() {
        return amenityId;
    }

    public void setAmenityID(Integer amenityId) {
        this.amenityId = amenityId;
    }

    public String getAmenityName() {
        return amenity_name;
    }

    public void setAmenityName(String amenity_name) {
        this.amenity_name = amenity_name;
    }

    public String toString() {
        return "Amenity [id=" + amenityId + ", amenity name=" + amenity_name + "]";
    }
}
