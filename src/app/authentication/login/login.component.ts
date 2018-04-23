import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Validation} from '../../../app/shared/validation';
import {emailRegex} from '../../../app/shared/global-constatnts';
import {LoginService} from './login.service';
import { FacebookService, LoginResponse, InitParams } from 'ngx-facebook';
declare const FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends Validation implements OnInit {

  form: FormGroup;
  asyncErrorMsg: string; // async error message from api
  laddaLoader: boolean; // ladda loading button indicator

  constructor(private iformBuilder: FormBuilder,
              private irouter: Router,
              private fb: FacebookService,
              private loginService: LoginService) {
    super(iformBuilder, irouter);
    fb.init({
      appId: '162186004461094',
      cookie: false,  // enable cookies to allow the server to access
      // the session
      xfbml: true,  // parse social plugins on this page
      version: 'v2.8' // use graph api version 2.5
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(emailRegex)]],
        password: ['', Validators.required]
      }
    );
  }

  onSubmit() {
    this.laddaLoader = true;
    this.loginService.login(this.form.value);
    // .subscribe(
    //   data => {
    localStorage.setItem('currentUserToken', this.loginService.login(this.form.value));
    // },
    // error => {
    //   this.laddaLoader = false;
    //  this.asyncErrorMsg = this.humanizeHttpError(error);
    //   if (error.status === 400) {
    //     //  this.asyncErrorMsg = this.newErrors.myErrors.LoginError;
    //  }
    // },
    // () => {
    this.laddaLoader = false;
    this.router.navigate(['/home']);
  }

  //   );
  // }

  // me(userId, accessToken) {
  //   this.fb.api(
  //     '/' + userId + '?fields=id,name,first_name,email,gender,picture.width(150).height(150),age_range,friends',
  //     (result) => {
  //       console.log('result===', result);
  //       if (result && !result.error) {
  //       }
  //     });
  // }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
    //
    // FB.login((response: any) => {
    //   if (response.status === 'connected') {
    //     this.me(response.authResponse.userID, response.authResponse.accessToken);
    //     // Logged into your app and Facebook.
    //   } else if (response.status === 'not_authorized') {
    //     // The person is logged into Facebook, but not your app.
    //   } else {
    //
    //     // The person is not logged into Facebook, so we're not sure if
    //     // they are logged into this app or not.
    //   }
    //
    // }, {scope: 'user_friends,email'});

  }
}
