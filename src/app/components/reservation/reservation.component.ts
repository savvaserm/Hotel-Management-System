import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../services/list-service.service';
import { Options } from 'ngx-animating-datepicker';
import { User } from '../../model/model.user';
import { RoomListService } from '../../services/room-list.service';
import {formatDate} from '@angular/common';
import DateTimeFormat = Intl.DateTimeFormat;



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

  rooms: any;
  @Input() showMePartially: boolean;
  roomtypes: any;
  hotels: any;
  selectedValue: string;
  selectedValue2: string;
  opened: boolean;
  errorMessage: string;
  noHotelsMessage: string;
  noRoomtypesMessage: string;
  noRoomsMessage: string;
  dates: Date;
  user: User = new User();
  showVar: boolean;
  selectedRoom = {
    room_hotelId: '{id: , hotel name: }',
    availability: '' ,
    roomtype: '{price: , roomtype: }',
    roomId: '' ,
    roomNumber: ','
  };
  toggleChild() {
    this.showVar = !this.showVar;
  }



  constructor(private listService: ListService, private roomListService: RoomListService) { }

  ngOnInit() {
    this.getHotels();
    this.getRoomtypes();
    this.getRooms();
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


  getRooms() {
    this.roomListService.getRooms()
      .subscribe(data => {

        if (data) {

          this.rooms = data;

        } else {

          this.noRoomsMessage = 'No rooms available';
        }
      }, error => {
        this.errorMessage = error;
      });
  }


  roomSelected(room) {
    this.selectedRoom = room;
  }


}
