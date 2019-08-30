import { Component, Input, OnInit } from '@angular/core';
import { ListService } from '../../services/list-service.service';
import { Options } from 'ngx-animating-datepicker';
import { User } from '../../model/model.user';
import { RoomListService } from '../../services/room-list.service';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';
import { Reservation } from '../../model/model.reservation';
import { Amenities } from '../../model/model.amenities';
import { Roomtype } from '../../model/model.roomtype';
import { Room } from '../../model/model.room';
import { reduce } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

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

  reservation = new Reservation();
  nights: number;
  amenities: Amenities;
  isOptional = true;
  rooms: Room[] = [];
  @Input() showMePartially: boolean;
  roomtypes: Roomtype;
  hotels: any;
  selectedValue: string;
  selectedValue2: Roomtype;
  selectedPayment: string;
  opened: boolean;
  errorMessage: string;
  noHotelsMessage: string;
  noRoomtypesMessage: string;
  noRoomsMessage: string;
  dates: Date[];
  checkin = new Date();
  checkout = new Date();
  show: boolean;
  user: User = new User();
  showVar: boolean;
  total: number;
  totalCost: number;
  showCard: boolean;
  selectedAmenities = [];
  selectedRoom: Room;
  currUser: User;

  sum() {
    for (const i of this.selectedAmenities) {
      this.totalCost = this.amenities.cost;
    }
    return this.totalCost;
  }

  toggleChild2() {
    this.show = true;
  }

  toggleFalse() {
    this.show = false;
  }


  constructor(private authService: AuthService, private listService: ListService, private roomListService: RoomListService,
              private reservationService: ReservationService, private router: Router) {
  }

  ngOnInit() {
    this.getId();
    this.getHotels();
    this.getRoomtypes();
    this.getAmenities();
    this.getTotal();
  }

  getHotels() {
    this.listService.getHotels()
      .subscribe(data => {
        if (data) {
          this.hotels = data;
        } else {
          this.noHotelsMessage = 'No hotels found';
        }
      }, error => {
        this.errorMessage = error;
      });
  }

  getRoomtypes() {
    this.listService.getRoomtypes()
      .subscribe((data: Roomtype) => {
        if (data) {
          this.roomtypes = data;
        } else {
          this.noRoomtypesMessage = 'No roomtypes found';
        }
      }, error => {
        this.errorMessage = error;
      });
  }


  getRooms(id: number) {
    this.showVar = !this.showVar;
    console.log(id);
    this.roomListService.getRoomsByRoomtype(id)
      .subscribe((data: Array<Room>) => {
        console.log(data);
        if (data) {
          this.rooms = data;
        } else {
          this.noRoomsMessage = 'No rooms available';
          console.log(this.noRoomsMessage);
        }
      }, error => {
        this.errorMessage = error;
      });
  }

  getAmenities() {
    this.listService.getAmenities()
      .subscribe((data: Amenities) => {
        if (data) {
          this.amenities = data;
        }
      }, error => {
        this.errorMessage = error;
      });
  }

  roomSelected(room: Room) {
    this.selectedRoom = room;
    this.showCard = true;
    console.log(this.selectedRoom.roomID);
  }

  reserveRoom() {
    console.log(this.currUser);
    this.reservation.customerId = this.currUser.id;
    this.reservation.roomId = this.selectedRoom.roomID;
    this.reservation.checkin = this.checkin;
    this.reservation.checkout = this.checkout;
    console.log(this.reservation);
    this.reservationService.createReservation(this.reservation)
      .subscribe(data => {
          this.router.navigate(['/profile']);
          alert('Room booked');
        }, error => {
          alert('Cannot book this room');
        }
      );
  }

  getTotal() {
    this.total = this.selectedRoom.roomtype.price + this.sum();
    return this.total;
  }

  assign(roomtype: Roomtype) {
    this.selectedValue2 = roomtype;
    console.log(this.selectedValue2);
  }

  getDates() {
    this.checkin = this.dates[0];
    this.checkout = this.dates[1];
    console.log(this.checkin);
    console.log(this.checkout);
  }

  getId() {
    this.authService.getId()
      .subscribe((data: User) => {
        console.log(data);
        if (data) {
          this.currUser = data;
          console.log(this.currUser.id);
        }
      }, error => {
        this.errorMessage = error;
      });
  }
}


