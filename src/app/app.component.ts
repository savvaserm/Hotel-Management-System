import { Component } from '@angular/core';
import {Reservation} from './model/model.reservation';

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

  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
}
