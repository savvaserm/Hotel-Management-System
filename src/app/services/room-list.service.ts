import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomListService {

  private apiHeaders = new Headers({
    'Content-type': 'application/json'
  });

  constructor(private http: HttpClient) {}

  getRooms() {
    const roomsUrl = AppComponent.API_URL + '/users/hotels/rooms';
    return this.http.get(roomsUrl)
      .pipe(map(res => res));
  }

    getRoomsByRoomtype(id) {
      const roomsUrl = AppComponent.API_URL + '/users/hotels/rooms/' + id;
      console.log(roomsUrl);
      return this.http.get(roomsUrl)
        .pipe(map(res => res));
    }
}
