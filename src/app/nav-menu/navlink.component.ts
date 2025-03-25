import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navlink',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <span [class]="'nav-item'" routerLinkActive="active">
      <span class="icon">
        <span class="subicon">13</span>
        <i data-feather="home"></i>
      </span>
      <a [routerLink]="linkedItem">{{linkText}}</a>
    </span>
  `,
  styleUrls: ['nav-menu.component.css'],
})
export class NavlinkComponent {
  @Input() linkedItem!: string;
  @Input() linkText!: string;
}
