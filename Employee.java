package com.app.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;



@Entity
@Table(name = "employee")
public class Employee{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer employeeId;

    private String firstname;

    private String lastname;

    private String position;

    private Integer emp_hotelId;

    private String start_shift;
    private String end_shift;


    public Employee(){

    }

    public Employee(String firstname, String lastname, String position, String start_shift, String end_shift){
        this.setFirstname(firstname);
        this.setLastname(lastname);
        this.setPosition(position);
        this.setStartShift(start_shift);
        this.setEndShift(end_shift);
    }

    @Override
    public String toString() {
        return "Employee [id=" + employeeId + ", first name=" + firstname + ", last name=" + lastname + ", position=" + position + ", start time=" + start_shift + ", end time=" + end_shift +
                ",]";
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname){
        this.firstname = firstname;
    }

    public String getLastname(){
        return lastname;
    }

    public void setLastname(String lastname){
        this.lastname = lastname;
    }


    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }


    public String getStartShift() {
        return start_shift;
    }

    public void setStartShift(String startShift) {
        this.start_shift = startShift;
    }

    public String getEndShift() {
        return end_shift;
    }

    public void setEndShift(String endShift) {
        this.end_shift = endShift;
    }

    public void setId(Integer employeeId){
        this.employeeId = employeeId;
    }

    public Integer getId() {
        return employeeId;
    }



}
