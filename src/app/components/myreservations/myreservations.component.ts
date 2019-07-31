import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ListService } from '../../services/list-service.service';
import { Reservation } from '../../model/model.reservation';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent implements OnInit {

  noReservationsMessage: string;
  errorMessage: string;
  reservations: any;
  opened: boolean;
  now = new Date();
  x = 0;
  var = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.getPastReservations();
  }

  getPastReservations() {
    this.listService.getReservations()
      .subscribe((data: Array<Reservation>) => {
        console.log(data[this.x].customer.username);
        console.log(this.now);
        for (this.x; this.x < data.length; this.x++) {
          if (data[this.x].customer.username === this.var.username ) {
            this.reservations = data;
            console.log(this.var.username);
          } else {
            return this.noReservationsMessage = 'No reservations found';
          }
        }
      }, error => {
        this.errorMessage = error;
      });
  }

}
