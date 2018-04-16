import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx'
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class CheckUserService {

  public authenticatedUserToken = new BehaviorSubject(false);
//   private rootUrl = environment.rootUrl; // Staging Server URL;
  private token = localStorage.getItem('currentUserToken');
  private user;

  constructor(private http: Http, private router: Router) {
    if (!this.user && this.token) {
    //   console.log(this.token, 'token');
    //   this.http.post(this.rootUrl + '/api/getUserByJwt', {jwtToken: this.token}, JwtAuth.jwtHeader())
    //     .map((response) => response.json()).subscribe(
    //     res => {
    //       this.user = res;
          this.authenticatedUserToken.next(true);
        // },
        // err => {
    } else {
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    }
    //   );
    // }
//   }
}

