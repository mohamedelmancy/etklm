import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {HttpModule} from '@angular/http';
import {CheckUserService} from './main-layout/checkUser';
import {LoginService, LoginGuard} from './authentication/login/login.service';
import { AppComponent } from './app.component';
import { LoginComponent } from  './authentication/login/login.component';
import { AppRouting } from './app.routing'; // Added here
import { HomeService } from './home/home.service';
// import { TooltipModule } from 'angular2-tooltips';
import { RouterModule} from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LaddaModule } from 'angular2-ladda';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingGuard } from './landing-page/landing-guard';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {RegisterComponent} from './authentication/register/register.component';
import {BusyModule} from 'angular2-busy';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {AccordionModule, AlertModule, BsDropdownModule, CarouselModule, ModalModule} from 'ngx-bootstrap';
import { FacebookModule } from 'ngx-facebook';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

// import {AccordionModule, BsDropdownModule, CarouselModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationComponent,
    ResetPasswordComponent,
    LandingPageComponent,
    MainLayoutComponent,
    RegisterComponent,
    AboutComponent,
    ContactUsComponent,
    UserPageComponent,
    TermsComponent,
    PrivacyComponent,


    ],
  imports: [
    BrowserModule, AppRouting,
    HttpModule,
    TooltipModule,
    LaddaModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    BusyModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    FacebookModule.forRoot(),
    // ModalModule.forRoot(),
    // BsDropdownModule.forRoot(),
    // AccordionModule.forRoot(),
    TooltipModule.forRoot(),
    // CarouselModule.forRoot(),
  ],
  providers: [LoginComponent,
     RouterModule, HomeService, LoginGuard, CheckUserService, LandingGuard , LoginService, RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
