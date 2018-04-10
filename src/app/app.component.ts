import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name  = 'mohamed elmancy';
  obj = { name }; // Object Short Notation
  constructor(private homeService: HomeService) {}
  ngOnInit() {
      console.log('your object ' , this.obj);
      this.homeService.alerts();
      }
}
