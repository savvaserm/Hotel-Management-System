import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  noUsersMessage: string;
  errorMessage: string;
  opened: boolean;

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

}
