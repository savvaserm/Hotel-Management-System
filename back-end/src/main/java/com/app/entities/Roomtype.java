package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name = "roomtype")
public class Roomtype {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer room_typeId ;

    private String room_type;

    private Integer price;

    @ManyToOne
    @JoinColumn(name = "quantityId", referencedColumnName = "id")
    private Quantity quantityId;

    @Override
    public String toString() {
        return "Roomtype [id = " + room_typeId + ", roomtype = " + room_type + "]";
    }

    public Quantity getQuantity() {
        return quantityId;
    }

    public void setQuantity(Quantity quantityId) {
        this.quantityId = quantityId;
    }

    public Integer getPrice(){
        return price;
    }

    public void setPrice(Integer price){
        this.price = price;
    }

    public String getRoomType(){
        return room_type;
    }

    public void setRoomType(String room_type){
        this.room_type = room_type;
    }

    public void setRoomTypeID(Integer room_typeid){
        this.room_typeId = room_typeid;
    }

    public Integer getRoomTypeID(){
        return room_typeId;
    }


}
