import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../authentication/login/login.service';

/**
 * Guards the Home route if logged in and redirects to dashboard
 */
@Injectable()
export class LandingGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/home']);
    } else {
      return true;
    }

  }
}
