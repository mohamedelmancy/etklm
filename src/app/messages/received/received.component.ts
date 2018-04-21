import { Component, OnInit } from '@angular/core';
import RawMediaRecorder from '../../RawMediaRecorder';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {Validation} from '../../shared/validation';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})

export class ReceivedComponent extends  Validation implements OnInit {
  replay = false;
  isVoice = true;
  isText = true;
  isText1 = false;
  isAudio = true;
  recorder: any;
  recording = false;
  source: any;
  doneRecording = false;
  laddaLoader = false;
  laddaLoader2 = false;
  constructor(private iformBuilder: FormBuilder, private irouter: Router) {
    super(iformBuilder, irouter);
    this.recorder = new RawMediaRecorder(new AudioContext());
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      replay: ['', []]
    });
  }
  onSubmit() {
    this.laddaLoader = true;
    // this.replay = false;
    console.log('submiteed');
  }

  reportUser() {
  }
  deleteMessage() {
  }
  startRecorder() {
    this.recorder.start();
    this.recorder.onStart = () => {
      this.recording = true;
    };
    this.recorder.onData = data => {
      const channels  = data.getChannelData(0);
      this.source = this.recorder.source;
      console.log('data', data);
      console.log('channels', channels);
    };
  }
  startToListen() {
    // this.recorder.voice.start();
    // this.recorder.source.start();
  }
  stopRecorder() {
    this.recording = false;
    this.doneRecording = true;
    this.recorder.stop();
    this.recorder.onStop = () => {
    };
  }
}
