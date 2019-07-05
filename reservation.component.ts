import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/list-service.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  hotels: any;
  selectedValue: string;
  selectedValue2: string
  opened: boolean;
  errorMessage: string;
  noHotelsMessage: string;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getHotels();
  }

  getHotels() {
    this.listService.getHotels()
      .subscribe(data => {
        if (data) {

          this.hotels = data;

        } else {

          this.noHotelsMessage = 'No hotels found';

        }}, error => {

        this.errorMessage = error;

      });
  }
}
