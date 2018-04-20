import { Component, OnInit } from '@angular/core';
import {Validation} from '../shared/validation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {emailRegex} from '../shared/global-constatnts';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent extends Validation implements OnInit {
  form: FormGroup;
  asyncErrorMsg: string;
  laddaLoader: boolean;
  profile = true;
  changePassword = false;
  removeAccount = false;
  constructor(private iformBuilder: FormBuilder,
              private irouter: Router) {
    super(iformBuilder, irouter);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.maxLength(20), Validators.minLength(3)]],
      newEmail: ['', [Validators.pattern(emailRegex), Validators.required]]
    });
  }
  onSubmit() {
    this.laddaLoader = true;
  }
  profileClicked() {
    this.profile = true;
    this.changePassword = false;
    this.removeAccount = false;
  }
  changePasswordClicked() {
    this.profile = false;
    this.changePassword = true;
    this.removeAccount = false;
  }
  removeClicked() {
    this.profile = false;
    this.changePassword = false;
    this.removeAccount = true;
  }
}
