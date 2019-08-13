import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../model/model.reservation';
import { Room } from '../../model/model.room';
import { RoomListService } from '../../services/room-list.service';

@Component({
  selector: 'app-viewratings',
  templateUrl: './viewratings.component.html',
  styleUrls: ['./viewratings.component.css']
})
export class ViewratingsComponent implements OnInit {

  showVar = false;
  opened: boolean;
  rooms: Room;
  noRoomsMessage: string;
  errorMessage: string;

  constructor(private roomListService: RoomListService) { }

  ngOnInit() {
  }

  toggle() {
    this.showVar = true;
  }

  getRooms() {
    this.roomListService.getRooms()
      .subscribe((data: Room) => {
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
