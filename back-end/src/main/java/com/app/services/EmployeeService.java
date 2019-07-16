package com.app.services;

import com.app.dao.EmployeeRepository;
import com.app.entities.Employee;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class EmployeeService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getEmployees() { return employeeRepository.findAll(); }


}

