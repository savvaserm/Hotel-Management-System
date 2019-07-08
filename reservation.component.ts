import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list-service.service';
import { Options } from 'ngx-animating-datepicker';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  datepickerOptions: Options = {
    selectMultiple: false, // Select multiple dates
    closeOnSelect: false, // Close datepicker when date(s) selected
    animationSpeed: 400, // Animation speed in ms
    easing: 'ease-in', // Easing type string
    hideRestDays: false, // Hide the rest days
    disableRestDays: true, // Disable the click on rest days
    hideNavigation: false, // Hide the navigation
    range: true, // Use range functionality
    currentDate: new Date(), // Tne current displayed date (month, year)
    timeoutBeforeClosing: 5000, // The timeout / delay before closing
    weekdayFormat: 'short', // "narrow", "short", "long"
    weekStart: 'monday' // Set the week start day
  };

  roomtypes: any;
  hotels: any;
  selectedValue: string;
  selectedValue2: string;
  opened: boolean;
  errorMessage: string;
  noHotelsMessage: string;
  noRoomtypesMessage: string;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getHotels();
    this.getRoomtypes();
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

  getRoomtypes() {
    this.listService.getRoomtypes()
      .subscribe( data => {
        if (data) {
          this.roomtypes = data;
        } else {
          this.noRoomtypesMessage = 'No roomtypes found';
        }}, error => {
          this.errorMessage = error;
      });
    }
}
