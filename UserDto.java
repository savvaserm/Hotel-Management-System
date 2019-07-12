package com.app.dto;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;


public class UserDto {

    public static enum Role{ USER, ADMIN }

    private String Firstname;

    private String Lastname;

    @NotNull
    private String username ;

    @NotNull
    @JsonProperty(access = Access.READ_WRITE)
    private String password ;

    @NotNull
    private String  role;

    private String email;

/////////////////////////////////////////////////////////////////////////////////

//    @JsonIgnore
//    public boolean isEnabled() {
//        return true;
//    }
//
//    @JsonIgnore
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @JsonIgnore
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @JsonIgnore
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @JsonIgnore
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        Collection<GrantedAuthority> authorities = new ArrayList<>();
//        authorities.add(new SimpleGrantedAuthority(role));
//        return authorities;
//    }
//
////////////////////////////////////////////////////////////////

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }



    @Override
    public String toString() {
        return "User [username=" + username + ", password=" + password + ", role=" + role + ", firstname=" + Firstname + ", lastname=" + Lastname +
                ",]";
    }

}
