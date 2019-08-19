import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../model/model.reservation';
import { Room } from '../../model/model.room';
import { RoomListService } from '../../services/room-list.service';
import { RatingService } from '../../services/rating.service';
import { Rating } from '../../model/model.rating';

@Component({
  selector: 'app-viewratings',
  templateUrl: './viewratings.component.html',
  styleUrls: ['./viewratings.component.css']
})
export class ViewratingsComponent implements OnInit {

  ratings: any;
  showVar = false;
  opened: boolean;
  rooms: Room;
  selectedValue: any;
  noRoomsMessage: string;
  errorMessage: string;

  constructor(private roomListService: RoomListService, private ratingService: RatingService) { }

  ngOnInit() {
    this.getRatings();
    this.getRooms();
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

  getRatings() {
    this.ratingService.getRatings()
      .subscribe((data: Rating) => {
        this.ratings = data;
        console.log(this.ratings);
      }, error => {
        this.errorMessage = error;
    });
  }

  onSelect(room: Room): void {
    this.selectedValue = room;
    console.log(this.selectedValue.roomID);
  }

}
