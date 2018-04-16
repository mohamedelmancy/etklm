import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Validation} from '../shared/validation';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import RawMediaRecorder from '../RawMediaRecorder';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent extends Validation implements OnDestroy, OnInit {
  busy: Subscription;
  recrived = true;
  favorite = false;
  sent = false;
  replay = false;
  isVoice = true;
  isText = true;
  recorder: any;
  recording = false;
  source: any;
  constructor(private iformBuilder: FormBuilder, private irouter: Router) {
    super(iformBuilder, irouter);
    this.recorder = new RawMediaRecorder(new AudioContext());
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      replay: ['', []]
    });
    console.log('Hellooooo');
  }
  ngOnDestroy() {
  }
  onSubmit() {
    this.laddaLoader = true;
  }
  receivedClicked() {
    this.recrived = true;
    this.sent = false;
    this.favorite = false;
  }
  sentClicked() {
    this.sent = true;
    this.recrived = false;
    this.favorite = false;
  }
  favoriteClicked() {
    this.favorite = true;
    this.recrived = false;
    this.sent = false;
  }
  startRecorder() {
    this.recorder.start();
      this.recorder.onStart = () => {
        this.recording = true;
      };
      this.recorder.onData = data => {
      const channels  = data.getChannelData(0);
      this.source = this.recorder.source;
      console.log('source', this.source);
         console.log('data', data);
          console.log('channels', channels);
      };
  }
  startToListen() {
    this.recorder.voice.start();
    this.recorder.source.start();
  }
  stopRecorder() {
    this.recorder.stop();
    this.recorder.onStop = () => {
      this.recording = false;
    };
  }
}
