import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
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
