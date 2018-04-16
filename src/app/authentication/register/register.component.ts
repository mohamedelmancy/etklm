import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Validation} from '../../../app/shared/validation';
import {emailRegex} from '../../../app/shared/global-constatnts';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  extends Validation implements OnInit {

  form: FormGroup;
  asyncErrorMsg: string; // async error message from api
  laddaLoader: boolean; // ladda loading button indicator

  constructor(private iformBuilder: FormBuilder,
    private irouter: Router) {

    super(iformBuilder, irouter);
  }
  ngOnInit() {
    localStorage.removeItem('registrationToken');
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.maxLength(20), Validators.minLength(3)]],
      profile_photo: ['' ],
      lastName: ['', [Validators.maxLength(20), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      password: ['', [Validators.minLength(8), Validators.required]],
      rePassword: ['', Validators.required]
    }, {validator: this.confirmPassword});
  }
  confirmPassword(formGroup: FormGroup): any {
    const rePassword = formGroup.controls.rePassword;
    const password = formGroup.controls.password;
    if ((password.value !== rePassword.value) && (rePassword.touched || rePassword.dirty)) {
      return rePassword.setErrors({matchFailed: true});
    } else {
      return null;
    }
  }
  onSubmit() {
    this.laddaLoader = true;
  }
}
