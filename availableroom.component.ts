import { Component, Input, OnInit } from '@angular/core';
import { RoomListService } from '../../services/room-list.service';
import { Room } from '../../model/model.room';

@Component({
  selector: 'app-availableroom',
  templateUrl: './availableroom.component.html',
  styleUrls: ['./availableroom.component.css']
})
export class AvailableroomComponent implements OnInit {
  rooms: any;
  @Input() showMePartially: boolean;
  errorMessage: string;
  noRoomsMessage: string;

  constructor(private roomListService: RoomListService) { }

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

}
