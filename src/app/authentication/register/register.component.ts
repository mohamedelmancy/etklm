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
  avatarSrc: any;
  avatarFile: any;

  form: FormGroup;
  asyncErrorMsg: string;
  laddaLoader: boolean;
  laddaLoader2 = false;
  acceptedAvatarFileTypes = [         // list of accepted file types for the avatar to be uplaoded
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/gif',
    'image/svg'
  ];
  constructor(private iformBuilder: FormBuilder,
    private irouter: Router) {

    super(iformBuilder, irouter);
  }
  ngOnInit() {
    localStorage.removeItem('registrationToken');
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.maxLength(20), Validators.minLength(3)]],
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
    console.log('form', this.form.value);
  }
  uploadNewAvatar(event) {
    if (event.target.files[0]) {
      for (const type of this.acceptedAvatarFileTypes) {
        if (event.target.files[0].type === type) {
          if (event.target.files[0].size <= 2097152) {
            event.preventDefault();
            this.avatarFile = event.target.files[0];
            console.log('file', this.avatarFile);

          }
        }
      }
}

