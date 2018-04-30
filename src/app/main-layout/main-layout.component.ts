import { Component, OnInit } from '@angular/core';
import {CheckUserService} from './checkUser';
import {Http, Response} from '@angular/http';
import {Router, UrlTree, PRIMARY_OUTLET} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isAuthenticatedUserToken: boolean;
  showResponsiveNav = false;
  contact = false;
  about = false;
  userName: any;
  privacy = false;
  terms = false;
  urlTree: UrlTree;
  constructor(private checkUser: CheckUserService, private router: Router) {
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
    this.urlTree = this.router.parseUrl(this.router.url);
    console.log(this.urlTree.root.children[PRIMARY_OUTLET].segments[1]);
    this.userName = this.urlTree.root.children[PRIMARY_OUTLET].segments[2];
    if (this.userName) {
      this.router.navigate(['/user-page']);
    }
    // this.workflowId = Number(this.urlTree.root.children[PRIMARY_OUTLET].segments[2].path);
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
