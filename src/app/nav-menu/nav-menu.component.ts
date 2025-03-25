import { Component } from '@angular/core';
import { NavlinkComponent } from './navlink.component';

@Component({
  selector: 'app-nav-menu',
  imports: [NavlinkComponent],
  template: `<nav class="menu" id="nav">
    <app-navlink [linkedItem]="'home'" [linkText]="'Main Menu'"/>
    <app-navlink [linkedItem]="'appidslist'" [linkText]="'App IDs List'"/>
    <app-navlink [linkedItem]="'appslist'" [linkText]="'Apps List'"/>
  </nav> `,
  styleUrls: ['nav-menu.component.css'],
})
export class NavMenuComponent {}
