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
    const employeesUrl = AppComponent.API_URL + '/employees';
    return this.http.get(employeesUrl)
    .pipe(map( res => res));

  }

}
