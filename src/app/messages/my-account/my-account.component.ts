import { Component, OnInit } from '@angular/core';
import {Validation} from '../../shared/validation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent extends Validation implements OnInit {
  laddaLoader = false;
  constructor(private iformBuilder: FormBuilder, private irouter: Router) {
    super(iformBuilder, irouter);

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      message: ['', [Validators.maxLength(30), Validators.required]],
    });
  }
  onSubmit() {
    this.laddaLoader = true;
  }
  SendMessage() {
  }
}
