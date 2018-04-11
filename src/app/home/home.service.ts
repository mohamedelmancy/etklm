import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }
  alerts() {
    console.log('home service is here');
  }

}
