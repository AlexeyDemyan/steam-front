import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavlinkComponent } from './navlink/navlink.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavlinkComponent],
  template: `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <h1>Main Menu</h1>
        </a>
        <nav>
          <app-navlink [linkedItem]="'appidslist'" [linkText]="'App IDs List'"></app-navlink>
        </nav>
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
