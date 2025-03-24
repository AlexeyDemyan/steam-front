import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavlinkComponent } from './navlink/navlink.component';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NavlinkComponent],
  template: `
    <main>
      <header class="brand-name">
        <h1>Header</h1>
        <nav>
          <a [routerLink]="['/']"> AppIds List </a>
          <app-navlink [linkedItem]="'appidslist'"></app-navlink>
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
