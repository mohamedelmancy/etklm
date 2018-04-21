import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss']
})
export class SentComponent implements OnInit {

  isText = true;
  isText1 = false;
  isAudio = true;
  isVoice = true;
  constructor() { }

  ngOnInit() {
  }
  reportUser() {
  }
  deleteMessage() {
  }
}
