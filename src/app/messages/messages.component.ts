import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Validation} from '../shared/validation';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SpeechRecognitionService } from '../main-layout/speech-recognition-service.service';
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
  showSearchButton: boolean;
    speechData: string;
  constructor(private iformBuilder: FormBuilder, private irouter: Router,
     private speechRecognitionService: SpeechRecognitionService) {
    super(iformBuilder, irouter);
    this.showSearchButton = true;
    this.speechData = '';
   }

   ngOnInit() {
    this.form = this.formBuilder.group({
      replay: ['', []]
    });
    console.log('Hellooooo');
  }
  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
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
  activateSpeechSearchMovie(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record()
        .subscribe(
        // listener
        (value) => {
            this.speechData = value;
            console.log(value);
        },
        // errror
        (err) => {
            console.log(err);
            if (err.error === 'no-speech') {
                console.log('--restatring service--');
                this.activateSpeechSearchMovie();
            }
        },
        // completion
        () => {
            this.showSearchButton = true;
            console.log('--complete--');
            this.activateSpeechSearchMovie();
        });
}
}
