import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavlinkComponent } from './navlink/navlink.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavlinkComponent, NavMenuComponent],
  template: `
    <main>
      <header class="brand-name">
        <app-nav-menu/>
        <!-- <a [routerLink]="['/']">
          <h1>Main Menu</h1>
        </a>
        <nav>
          <app-navlink [linkedItem]="'appidslist'" [linkText]="'App IDs List'"></app-navlink>
        </nav> -->
      </header>

      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
