import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LaddaModule} from 'angular2-ladda';
import {ModuleWithProviders} from '@angular/core';
import {MessagesComponent} from '../messages/messages.component';
import {HomeComponent} from './home.component';
import {SettingsComponent} from '../settings/settings.component';
// import {AboutComponent} from '../about/about.component';
// import {ContactUsComponent} from '../contact-us/contact-us.component' ;
import {HomeRouting} from './home.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BusyModule} from 'angular2-busy';
import {LoginComponent} from '../authentication/login/login.component';
import {AccordionModule, AlertModule, BsDropdownModule, CarouselModule, ModalModule} from 'ngx-bootstrap';
import {ChangePasswordComponent} from '../settings/change-password/change-password.component';
// import {SpeechRecognitionService} from '../main-layout/speech-recognition-service.service'
import { RemoveAccountComponent } from '../settings/remove-account/remove-account.component';
import {ReceivedComponent} from '../messages/received/received.component';
import { FavoriteComponent } from '../messages/favorite/favorite.component';
import { SentComponent } from '../messages/sent/sent.component';
import { MyAccountComponent } from '../messages/my-account/my-account.component';

@NgModule({
  imports: [
    CommonModule,
    LaddaModule,
    HomeRouting,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    BusyModule,


  ],

  declarations: [ HomeComponent,
                  MessagesComponent,
                  SettingsComponent,
                  // AboutComponent,
                  // ContactUsComponent,
                  ChangePasswordComponent,
                  RemoveAccountComponent,
                  ReceivedComponent,
                  FavoriteComponent,
                  SentComponent,
                  MyAccountComponent


  ],
  providers: [LoginComponent]
})
export class HomeModule { }
