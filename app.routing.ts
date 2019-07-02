import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgModule } from '@angular/core';
// import { AuthGuardService as AuthGuard} from './services/auth-guard.service';
import {UserslistComponent} from './components/userslist/userslist.component';


const appRoutes: Routes = [

  // den kanei navigate me to urlpermission  sto path:profile
  { path: 'list', component: UserslistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
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
