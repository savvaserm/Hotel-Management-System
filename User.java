package com.app.entities;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.*;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name = "customer")
public class User implements UserDetails {

    public static enum Role{ USER, ADMIN }

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer customerId;

    private String firstname;

    private String lastname;


    @Column(unique = true)
    private String username;

    @JsonProperty(access = Access.READ_WRITE)
    private String password;

    private String  role;

    private String email;


    public User(){
    }

    public User(String firstname, String lastname, String username, String password, String email){
        this.setFirstname(firstname);
        this.setLastname(lastname);
        this.setUsername(username);
        this.setPassword(password);
        this.setEmail(email);
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role));
        return authorities;
    }

    @Override
    public String toString() {
        return "User [id=" + customerId + ", username=" + username + ", password=" + password + ", role=" + role +
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

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
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

    public Integer getId() {
        return customerId;
    }

    public void setId(Integer customerId) {
        this.customerId = customerId;
    }




}
