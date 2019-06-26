import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { User } from '../model/model.user';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';

@Injectable()
export class AuthService {
  constructor(public http: HttpClient) { }


  public logIn(user: User) {

    const headers = new HttpHeaders();
    const response = new HttpResponse();

    return this.http.get(AppComponent.API_URL + '/users/login', {
      headers : {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(user.username + ':' + user.password)
      }
    })

    // tslint:disable-next-line:no-shadowed-variable
      .pipe(map((response: any) => {

        // tslint:disable-next-line:no-shadowed-variable
        const user = response.json().principal; // the returned user object is a principal object
        if (user) {
          // store user details in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }));
  }

  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL + 'logout', {} )
      .pipe(map((response: any) => {
        localStorage.removeItem('currentUser');
      }));
  }
}
