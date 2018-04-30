import { Component, OnInit } from '@angular/core';
import {Validation} from '../shared/validation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import RawMediaRecorder from '../RawMediaRecorder';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent extends Validation implements OnInit {
  recorder: any;
  recording = false;
  source: any;
  laddaLoader = false;
  startRecording = false;
  doneRecording = false;
  constructor(private iformBuilder: FormBuilder, private irouter: Router) {
    super(iformBuilder, irouter);
    this.recorder = new RawMediaRecorder(new AudioContext());
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      message: ['', [Validators.maxLength(30), Validators.required]],
    });
  }
  onSubmit() {
    this.laddaLoader = true;
  }
  check() {
    if (this.startRecording) {
      this.startRecorder();
    } else {
      this.stopRecorder();
    }
  }

  stopRecorder() {
    this.recording = false;
    this.recorder.stop();
    this.doneRecording = true
    this.recorder.onStop = () => {
    };
  }

  startRecorder() {
    this.recorder.start();
    this.recorder.onStart = () => {
      this.recording = true;
    };
    this.recorder.onData = data => {
      const channels  = data.getChannelData(0);
      // this.source = this.recorder.source;
      console.log('data', data);
      console.log('channels', channels);
    };
  }
  SendMessage() {
  }

}
