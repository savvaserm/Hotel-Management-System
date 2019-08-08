import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';
import { Reservation } from '../model/model.reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(public http: HttpClient) { }

  createReservation(reservation: Reservation) {
    return this.http.post(AppComponent.API_URL + '/users/hotels/reserveroom', reservation)
      .pipe(map(resp => console.log(resp)));
  }

  cancelRes(reservation: Reservation) {
    console.log(reservation);
    return this.http.post(AppComponent.API_URL + '/users/hotels/reservations/cancel', reservation)
      .pipe(map( response => console.log(response)));
  }
}
