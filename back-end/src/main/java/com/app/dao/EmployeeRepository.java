package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entities.Employee;

import org.springframework.web.bind.annotation.CrossOrigin;


@Repository
@CrossOrigin (origins = "http://localhost:4200")
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
}
