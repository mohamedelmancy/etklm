import { Component, OnInit } from '@angular/core';
import {Validation} from '../../shared/validation';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {emailRegex} from '../../../app/shared/global-constatnts';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent extends Validation implements OnInit {

  constructor(private iformBuilder: FormBuilder, private irouter: Router) {

    super(iformBuilder, irouter);
   }
   private asyncSuccessMsg: string;

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]]
    });
  }
  onSubmit() {
    this.laddaLoader = true;
    this.asyncSuccessMsg = ' ';
    this.asyncErrorMsg = ' ';
  }
}
