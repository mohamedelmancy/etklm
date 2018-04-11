import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  aboutClicked = false;
  settingsClicked = false;
  contactClicked = false;
  messagesClicked = true;


  constructor() {
  }

    ngOnInit() {
  }

}
