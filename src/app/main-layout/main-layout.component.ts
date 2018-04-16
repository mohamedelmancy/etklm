import { Component, OnInit } from '@angular/core';
import {CheckUserService} from './checkUser';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  private isAuthenticatedUserToken: boolean;


  constructor(private checkUser: CheckUserService, private http: Http, private router: Router) {
    this.checkUser.authenticatedUserToken.subscribe(
      res => {
        if (res === true) {
          this.isAuthenticatedUserToken = true;
          console.log('Ok Logeed',  this.isAuthenticatedUserToken);
          // this.getOrganizationInfo();
        } else {
          this.isAuthenticatedUserToken = false;
        }
      }
    );
  }

  ngOnInit() {
  }
  logout() {
    // this.http.post(this.rootUrl + '/api/auth/logout', {}, JwtAuth.jwtHeader())
      // .map((response: Response) => response.json())
      // .subscribe(
        // value => console.log(value),
        // error => console.log(error),
        // () => {
          localStorage.clear();
          window.location.reload();
          setTimeout(() => {
          this.router.navigate(['/login']);
          }, 1500);
        // }
      // )
  // }
 }
}
