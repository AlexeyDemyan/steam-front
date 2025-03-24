import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navlink',
  imports: [RouterLink],
  template: `<a class="navlink-link" [routerLink]="linkedItem">Test Text</a>`,
  styleUrls: ['./navlink.component.css'],
})
export class NavlinkComponent {
    @Input() linkedItem!: string;
}
