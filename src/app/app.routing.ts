import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
import {UserslistComponent} from './components/userslist/userslist.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {ReservationComponent} from './components/reservation/reservation.component';


const appRoutes: Routes = [

  { path: 'employees', component: EmployeesComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'list', component: UserslistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
//  { path: 'rooms', component: RoomComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to profile
  { path: '**', redirectTo: '/login' }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
