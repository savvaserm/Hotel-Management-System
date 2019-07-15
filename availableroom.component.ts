import { Component, Input, OnInit } from '@angular/core';
import { RoomListService } from '../../services/room-list.service';
import { Room } from '../../model/model.room';
import {JsonPrint} from './pipe';


@Component({
  selector: 'app-availableroom',
  templateUrl: './availableroom.component.html',
  styleUrls: ['./availableroom.component.css'],
})
export class AvailableroomComponent implements OnInit {
  rooms: any;
  @Input() showMePartially: boolean;
  errorMessage: string;
  noRoomsMessage: string;

  constructor(private roomListService: RoomListService) {
  }

  selectedRoom = {
    room_hotelId: '{id: , hotelName: }' + '<br/>',
    availability: '' + '<br/>',
    roomtype: '{price: , roomtype: , roomtypeId: }' + '<br/>',
    roomId: '' + '<br/>',
    roomNumber: ''
  }

  ngOnInit() {
    this.getRooms();
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
