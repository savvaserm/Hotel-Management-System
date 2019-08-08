import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { ProfileComponent } from './components/profile/profile.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AppRoutingModule } from './app.routing';
import { FacebookModule} from 'ngx-facebook';
import { CustomMaterialModule} from './material.module';
import { UserslistComponent } from './components/userslist/userslist.component';
import { ListService } from './services/list-service.service';
import { AaDatepickerModule } from 'ngx-animating-datepicker';
import { JsonPrint } from './components/reservation/pipe';
import { MyreservationsComponent } from './components/myreservations/myreservations.component';
import { RatingModule } from 'ng-starrating';
import { RatingService } from './services/rating.service';
import { RoomListService } from './services/room-list.service';
import {HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserslistComponent,
    ReservationComponent,
    EmployeesComponent,
    MyreservationsComponent,
    JsonPrint, HomepageComponent

  ],
  imports: [
    BrowserModule, AaDatepickerModule,
    BrowserAnimationsModule, HttpClientModule, FormsModule, AppRoutingModule, CustomMaterialModule,
    FacebookModule.forRoot(), RatingModule
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [AuthService, AccountService, ListService, RatingService, RoomListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
