import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list-service.service';
import {Employee} from '../../model/model.employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  selectedEmp: Employee;
  employees: any;
  noUsersMessage: string;
  errorMessage: string;
  opened: boolean;
  showCard = false;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.listService.getEmployees()
      .subscribe(data => {
        if (data) {

          this.employees = data;

        } else {

          this.noUsersMessage = 'No employees found';

        }}, error => {

        this.errorMessage = error;

      });
  }

  employeeSelected(employee: Employee) {
    this.selectedEmp = employee;
    this.showCard = true;
  }
}
