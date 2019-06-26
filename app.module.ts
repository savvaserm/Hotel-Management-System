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
import { UrlPermission } from './urlPermission/url.permission';
import { CustomMaterialModule} from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule, AppRoutingModule, CustomMaterialModule, FacebookModule.forRoot(),
  ],
  exports: [
    AppRoutingModule,
  ],
  providers: [AuthService, AccountService, UrlPermission],
  bootstrap: [AppComponent]
})
export class AppModule { }
