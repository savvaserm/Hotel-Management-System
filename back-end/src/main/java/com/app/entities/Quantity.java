package com.app.entities;

import javax.persistence.*;

@Entity
@Table(name = "quantity")
public class Quantity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private Integer amount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "Quantity{" +
                "id=" + id +
                ", amount=" + amount +
                '}';
    }
}
