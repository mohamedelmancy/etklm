import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {ModuleWithProviders} from '@angular/core';
import {MessagesComponent} from '../messages/messages.component';
import {SettingsComponent} from '../settings/settings.component';
import {ContactUsComponent} from '../contact-us/contact-us.component' ;
import {AboutComponent} from '../about/about.component';


export const HomeRouting: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: HomeComponent, data: {title: 'home'},
  children: [
  { path: '', redirectTo: 'messages', pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent, data: {title: 'settings'}},
  {path: 'contact-us', component: ContactUsComponent, data: {title: 'contact-us'}},
  {path: 'messages', component: MessagesComponent, data: {title: 'messages'}},
  {path: 'about', component: AboutComponent, data: {title: 'about'}},
    ]},
]);


