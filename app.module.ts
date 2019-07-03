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
import { AppRoutingModule } from './app.routing';
import { FacebookModule} from 'ngx-facebook';
// import { AuthGuardService } from './services/auth-guard.service';
import { CustomMaterialModule} from './material.module';
import { UserslistComponent } from './components/userslist/userslist.component';
import { ListService } from './services/list-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserslistComponent

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule, AppRoutingModule, CustomMaterialModule, FacebookModule.forRoot(),
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [AuthService, AccountService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }