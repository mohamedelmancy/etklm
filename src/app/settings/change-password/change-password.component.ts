import { Component, OnInit } from '@angular/core';
import {Validation} from '../../shared/validation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends Validation implements OnInit {


  constructor(private iformBuilder: FormBuilder, private irouter: Router) {
    super(iformBuilder, irouter);

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      currentPassword: ['', [Validators.required]],
      password: ['', [Validators.minLength(8), Validators.maxLength(30), Validators.required]],
      passwordConfirmation: ['', Validators.required]
    }, {validator: this.confirmPassword});
  }

  onSubmit() {
    this.laddaLoader = true;
    //   this.asyncSuccessMsg = ' ';
    //   this.asyncErrorMsg = ' ';
    //   this.changePasswordService.changePassword(this.form.value)
    //     .subscribe(
    //       data => {
    //       },
    //       error => {
    //         this.laddaLoader = false;
    //         const Msg = this.humanizeHttpError(error);
    //       },
    //       () => {
    //         this.disableForUpdating = true;
    //         this.laddaLoader = false;
    //         this.form.reset();
    //         // this.location.back();
    //       }
    //     );
    // }
  }
  confirmPassword(formGroup: FormGroup): any {
    const rePassword = formGroup.controls.passwordConfirmation;
    const password = formGroup.controls.password;
    if ((password.value !== rePassword.value) && (rePassword.touched || rePassword.dirty)) {
      return rePassword.setErrors({matchFailed: true});
    } else {
      return null;
    }
  }
}
