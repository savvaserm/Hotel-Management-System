import { Injectable } from '@angular/core';
import { User } from '../model/model.user';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountService {
  constructor(public http: HttpClient) { }

  createAccount(user: User) {
    return this.http.post(AppComponent.API_URL + '/register', user)
      .pipe(map(resp => console.log(resp)));
  }
}
