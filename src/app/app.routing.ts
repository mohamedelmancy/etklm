import {RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginGuard } from './authentication/login/login.service';
import { LandingPageComponent} from './landing-page/landing-page.component';
import { LandingGuard} from './landing-page/landing-guard';
import { MainLayoutComponent} from './main-layout/main-layout.component';
import { LoginComponent } from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {AboutComponent} from './about/about.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
export const AppRouting: ModuleWithProviders = RouterModule.forRoot([
    {path: '', component: LandingPageComponent, canActivate: [LandingGuard]},
    {
      path: '', component: MainLayoutComponent,
      children: [
        {
          path: 'home',
          loadChildren: './home/home.module#HomeModule',
          canActivateChild: [LoginGuard],
        },
      ]
    },
    {
      path: 'login',
      component: LoginComponent,
     },
     {
      path: 'register',
      component: RegisterComponent,
     },
     {
      path: 'about',
      component: AboutComponent,
     },
     {
      path: 'contact-us',
      component: ContactUsComponent,
     },
  ]);
