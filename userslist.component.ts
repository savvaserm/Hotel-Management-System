import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services/list-service.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  users = [];
  noUsersMessage: string;
  errorMessage: string;

  constructor(private listService: ListService) {
  }

  ngOnInit() {

    this.getUsers();

  }

  getUsers() {
    this.listService.getUsers()
      .subscribe(data => {
        if (data.length) {

          this.users = data;

        } else {

          this.noUsersMessage = 'No users found';

        }}, error => {

          this.errorMessage = error;

        });

  }

}
