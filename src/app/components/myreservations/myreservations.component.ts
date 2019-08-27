import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListService} from '../../services/list-service.service';
import {Reservation} from '../../model/model.reservation';
import {Rating} from '../../model/model.rating';
import {RatingService} from '../../services/rating.service';
import {ReservationService} from '../../services/reservation.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent implements OnInit {


  selectedRes: Reservation;
  selectedRes1 = new Reservation();
  rating = new Rating();
  noReservationsMessage: string;
  errorMessage: string;
  reservations: Reservation[] = [];
  reservations2: Reservation[] = [];
  opened: boolean;
  now = new Date();
  x = 0;
  showVar = false;
  showVar1 = false;

  constructor(private listService: ListService, public ratingService: RatingService, private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.getReservations();
  }

  toggle(selectedItem: Reservation) {
    this.showVar = true;
    this.selectedRes = selectedItem;
  }

  toggle1(selectedItem: Reservation) {
    this.showVar1 = true;
    this.selectedRes1 = selectedItem;
  }

  setRating() {
    this.ratingService.createRating(this.rating)
      .subscribe(data => {
        alert('Rating submitted');
      }, error => {
        alert('Cannot submit rating');
      });
  }

  // TA FILTRARW STO FRONT ANTI GIA TO BACKEND ME REPOSITORY METHOD (findResByUsername sto repo kai reservationRepository.findByCustomer(userRepository.findByUsername(username)))


  // getPastReservations() {
  //   this.listService.getReservations()
  //     .subscribe((data: Array<Reservation>) => {
  //       console.log(data[this.x].customer.username);
  //       console.log(this.now);
  //       console.log(this.var.username);
  //       for (this.x; this.x < data.length; this.x++) {
  //         if (data[this.x].customer.username === this.var.username) {
  //           this.reservations[this.x] = data[this.x];
  //           }
  //       }
  //       console.log(this.var.username);
  //       console.log(this.reservations);
  //     }, error => {
  //       this.errorMessage = error;
  //     });
  // }

  getReservations() {
    this.listService.getReservationsByUsername()
      .subscribe((data: Array<Reservation>) => {
        if (data) {
          this.reservations = data;
        } else {
          this.noReservationsMessage = 'No reservations found!';
          console.log(this.noReservationsMessage);
        }
      }, error => {
        this.errorMessage = error;
      });
  }

  cancelRes(res: Reservation) {
    if (window.confirm('Are you sure you want to cancel this reservation?')) {
      this.reservationService.cancelRes(res);
      console.log(res);
      alert('Reservation cancelled!');
    }
  }

  updateRes(res: Reservation) {
    this.reservationService.updateRes(res)
      .subscribe(data => {
        alert('Reservation updated!' + '\n' + res);
      }, error => {
        alert('Cannot update reservation!');
      });
    console.log(res);
  }

  // getPastReservations() {
  //   this.listService.getReservationsByUsername()
  //     .subscribe((data: Array<Reservation>) => {
  //       for (this.x; this.x < data.length; this.x++) {
  //         if (data[this.x].checkout < this.now) {
  //           this.reservations2[this.x] = data[this.x];
  //         }
  //       }
  //     }, error => {
  //       this.errorMessage = error;
  //     });
  //
  // }

}

