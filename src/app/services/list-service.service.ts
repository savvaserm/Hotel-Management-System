import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiHeaders = new Headers({
    'Content-type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getUsers() {
    const usersUrl = AppComponent.API_URL + '/users/list';
    return this.http.get(usersUrl)
    .pipe(map(res => res));
  }

  getEmployees() {
    const employeesUrl = AppComponent.API_URL + '/users/employees';
    return this.http.get(employeesUrl)
    .pipe(map( res => res));

  }

  getHotels() {
    const  hotelsUrl = AppComponent.API_URL + '/users/hotels';
    return this.http.get(hotelsUrl)
      .pipe(map(res => res));
  }

  getRoomtypes() {
    const roomtypeUrl = AppComponent.API_URL + '/users/hotels/roomtypes';
    return this.http.get(roomtypeUrl)
      .pipe(map(res => res));
  }

  getAmenities() {
    const amenitiesUrl = AppComponent.API_URL + '/users/hotels/rooms/amenities';
    return this.http.get(amenitiesUrl)
      .pipe(map(res => res));
  }

  getReservations() {
    const reservationsUrl = AppComponent.API_URL + '/users/hotels/rooms/reservations';
    return this.http.get(reservationsUrl)
      .pipe(map( res => res));
  }

}
