import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'
import {CanActivateChild, Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: Http, private router: Router) { }
  login(form: any) {
    const data = {token: ''};
    // return this.http.post(this.rootUrl + '/api/auth/login', {email: form.email, password: form.password})
    //   .map((response: Response) => response.json())
    return data.token = 'ok';
  }
  isLoggedIn() {
    return localStorage.getItem('currentUserToken') != null;
  }

}

@Injectable()
export class LoginGuard implements CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) {
  }
  canActivateChild(): boolean {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
