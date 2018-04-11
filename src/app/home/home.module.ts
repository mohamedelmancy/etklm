import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaddaModule} from 'angular2-ladda';
import {ModuleWithProviders} from '@angular/core';
import {MessagesComponent} from '../messages/messages.component';
import {HomeComponent} from './home.component';
import {SettingsComponent} from '../settings/settings.component';
import {AboutComponent} from '../about/about.component';
import {ContactUsComponent} from '../contact-us/contact-us.component' ;
import {HomeRouting} from './home.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BusyModule} from 'angular2-busy';

// import {SpeechRecognitionService} from '../main-layout/speech-recognition-service.service'

@NgModule({
  imports: [
    CommonModule,
    LaddaModule,
    HomeRouting,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule.forRoot(),
    BusyModule,


  ],

  declarations: [ HomeComponent, MessagesComponent, SettingsComponent, AboutComponent, ContactUsComponent
  ]
})
export class HomeModule { }
