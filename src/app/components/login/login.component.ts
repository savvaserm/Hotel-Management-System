import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../model/model.user';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


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

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit() {
  }


  login(): string {
    this.authService.logIn(this.user)
      .subscribe(data => {
        this.router.navigate(['/homepage']);
      }, err => {
        this.errorMessage = 'Error: Username or password is incorrect';
      });
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return localStorage.getItem('currentUser');
  }

// data => {
//   this.router.navigate(['profile']);
//   this.successMessage = 'User logged in';
// }, err => {
//   this.errorMessage = 'Error: Username or password is incorrect';
// };
// )
// ;
// }

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
