import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class LoginComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  successMessage: string;

  constructor(private authService: AuthService, private router: Router) { }



  ngOnInit() {}

  login(): void {
    this.authService.logIn(this.user)
      .subscribe(
        data => {
          this.router.navigate(['profile']);
          this.successMessage = 'User logged in';
        }, err => {
         this.errorMessage = 'Error: Username or password is incorrect';
        }
      );
  }

// .pipe(map((response: any) => {
//   console.log('test');
//   console.log(response);
//   // tslint:disable-next-line:no-shadowed-variable
//   const user = response.json().principal; // the returned user object is a principal object
//
//   // store user details in local storage to keep user logged in between page refreshes
//   localStorage.setItem('currentUser', JSON.stringify(user));
// }));
// return localStorage.getItem('currentUser');
// }
}
