import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListService } from '../../services/list-service.service';
import { Reservation } from '../../model/model.reservation';
import { Rating } from '../../model/model.rating';
import { RatingService } from '../../services/rating.service';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent implements OnInit {


  selectedRes: Reservation;
  rating = new Rating();
  noReservationsMessage: string;
  errorMessage: string;
  reservations: Reservation[] = [];
  opened: boolean;
  now = new Date();
  res: Reservation;
  x = 0;
  z = 0;
  var = JSON.parse(localStorage.getItem('currentUser'));
  showVar = false;

  constructor(private listService: ListService, public ratingService: RatingService, private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.getPastReservations();
  }

  toggle(selectedItem: Reservation) {
    this.showVar = true;
    this.selectedRes = selectedItem;
  }

  setRating() {
    this.ratingService.createRating(this.rating)
      .subscribe(data => {
      alert('Rating submitted');
    }, error => {
      alert('Cannot submit rating');
    });
  }

  getPastReservations() {
    this.listService.getReservations()
      .subscribe((data: Array<Reservation>) => {
        console.log(data[this.x].customer.username);
        console.log(this.now);
        console.log(this.var.username);
        for (this.x; this.x < data.length; this.x++) {
          if (data[this.x].customer.username === this.var.username) {
            this.reservations[this.x] = data[this.x];
            } else {
              return this.noReservationsMessage = 'No reservations found!';

          }
        }
        console.log(this.var.username);
        console.log(this.reservations);
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
}
