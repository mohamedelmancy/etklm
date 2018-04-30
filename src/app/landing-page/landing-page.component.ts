import {Component, OnInit} from '@angular/core';
// Animate On Scroll Library
// import * as AOS from 'aos';
// import {EditOrganizationService} from '../settings/organization-settings/organization-settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  showCollapsed = false;
  showInfoOne = false;
  showInfoTwo = false;
  terms = false;
  privacy = false;
  allOrganizations = [];
  searchKeyword = '';
  searchInputFocused: boolean;
  mouseIn: boolean;
  contact = false;
  about = false;
  showResponsiveNav = false;
  constructor( private router: Router) {

  }
  // scroll(el) {
  //   el.scrollIntoView();
  //   el.scrollIntoView({ behavior: 'smooth' })
  // }
  ngOnInit() {
    // AOS.init({});

  //   this.editOrganizationService.getAllOrganizations().subscribe(
  //     res => {
  //       this.allOrganizations = res.data.map( (org) => {
  //         return {'id': org.id, 'name': org.name.toLowerCase(), 'sub_domain': org.sub_domain}
  //       });
  //       console.log(this.allOrganizations);
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }

  // innerFocused(value) {
  //   if (value === true) {
  //     this.searchInputFocused = true;
  //   } else {
  //     this.mouseIn ? this.searchInputFocused = true : this.searchInputFocused = false;
  //   }
  // }
  }
}
