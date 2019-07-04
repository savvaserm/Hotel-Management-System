package com.app.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;



@Entity
@Table(name = "employee")
public class Employee{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long EmployeeID ;

    private String Firstname;

    private String Lastname;

    private String Position;

    private String startShift;
    private String endShift;


    public Employee(){

    }

    public Employee(String Firstname, String Lastname, String Position, String startShift, String endShift){
        this.setFirstname(Firstname);
        this.setLastname(Lastname);
        this.setPosition(Position);
        this.setStartShift(startShift);
        this.setEndShift(endShift);
    }

    @Override
    public String toString() {
        return "Employee [id=" + EmployeeID + ", firstname=" + Firstname + ", lastname=" + Lastname + ", position=" + Position + ", start time=" + startShift + ", end time=" + endShift +
                ",]";
    }

    public String getFirstname() {
        return Firstname;
    }

    public void setFirstname(String Firstname){
        this.Firstname = Firstname;
    }

    public String getLastname(){
        return Lastname;
    }

    public void setLastname(String Lastname){
        this.Lastname = Lastname;
    }


    public String getPosition() {
        return Position;
    }

    public void setPosition(String Position) {
        this.Position = Position;
    }


    public String getStartShift() {
        return startShift;
    }

    public void setStartShift(String startShift) {
        this.startShift = startShift;
    }

    public String getEndShift() {
        return endShift;
    }

    public void setEndShift(String endShift) {
        this.endShift = endShift;
    }

    public Long getId() {
        return EmployeeID;
    }



}
