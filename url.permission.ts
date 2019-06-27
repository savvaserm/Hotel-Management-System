import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UrlPermission implements CanActivate {

  constructor(public authService: AuthService, private router: Router) { }

//   canActivate(): boolean {
//     if (!this.authService.isAuthenticated()) {
//       this.router.navigate(['login']);
//       return false;
//     }
//     return true;
//   }
// }

  //////////////////////////////////////////////////////////////////////

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('currentUser')) {

      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
