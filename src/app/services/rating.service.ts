import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';
import { Rating } from '../model/model.rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(public http: HttpClient) { }

  createRating(rating: Rating) {
    return this.http.post(AppComponent.API_URL + '/users/hotels/rooms/rateroom', rating)
      .pipe(map(response => console.log(response)));

  }

  getRatings() {
    const ratingURL = AppComponent.API_URL + '/users/hotels/rooms/rating';
    return this.http.get(ratingURL)
      .pipe(map(res => res));
  }
}
