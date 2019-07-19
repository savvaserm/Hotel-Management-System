import {Component, OnInit} from '@angular/core';
import {ListService} from '../../services/list-service.service';

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

  constructor(private listService: ListService) {
  }

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.listService.getReservations()
      .subscribe(data => {
        if (data) {
          this.reservations = data;
        } else {
          return this.noReservationsMessage = 'No reservations found';
        }
      }, error => {
        this.errorMessage = error;
      });
  }

}
