import { Component } from '@angular/core';
import { Reservation } from './model/model.reservation';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  static API_URL = 'http://localhost:8080';

  now: number;
  var = JSON.parse(localStorage.getItem('currentUser'));
  showVar = false;

  toggle() {
    this.showVar = !this.showVar;
  }

  constructor(private authService: AuthService, private router: Router) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  logOut() {
    this.authService.logOut()
      .subscribe(
        data => {
          this.router.navigate(['/homepage']);
        },
        error => {

        });
    localStorage.removeItem('currentUser');
  }

}

