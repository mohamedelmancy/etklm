import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Validation} from '../../../app/shared/validation';
import {emailRegex} from '../../../app/shared/global-constatnts';
import {LoginService} from './login.service';
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
              private irouter: Router, private loginService: LoginService) {
    super(iformBuilder, irouter);
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
}
