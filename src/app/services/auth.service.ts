import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from '../model/model.user';
import { map } from 'rxjs/operators';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

  errorMessage: string;

  constructor(public http: HttpClient, public router: Router) {
  }

  // ----------------------------------------------------------------------------------------
  //
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('currentUser');
  //
  //   // Check whether the token is expired and return true or false
  //   if (token == null) {
  //     return false;
  //   } else {
  //     return !this.jwtHelper.isTokenExpired(token);
  //   }
  // }


  // ----------------------------------------------------------------------------------------

  public logIn(user: User) {

    return this.http.get(AppComponent.API_URL + '/users/login', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(user.username + ':' + user.password)
      }
    })

      .pipe(map((response: any) => {
          this.router.navigate(['homepage']);
          // tslint:disable-next-line:no-shadowed-variable
          const user = response.json().principal.id; // the returned user object is a principal object
          return user;

        }
      ));
  }


  // // tslint:disable-next-line:no-shadowed-variable
  // .pipe(map((response: any) => {
  //           console.log(response);
  //           // tslint:disable-next-line:no-shadowed-variable
  //           const user = response.json().principal; // the returned user object is a principal object
  //
  //           // store user details in local storage to keep user logged in between page refreshes
  //           localStorage.setItem('currentUser', JSON.stringify(user));
  //         }));

  // ------------------------------------------------------------------------------------

  logOut() {

    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL + 'logout', {})
      .pipe(map((response: any) => {
        localStorage.removeItem('currentUser');
      }));
  }
}
