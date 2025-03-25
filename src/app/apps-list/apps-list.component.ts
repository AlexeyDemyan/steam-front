import { Component } from '@angular/core';
import { FiltersContainerComponent } from '../filters-container/filters-container.component';

@Component({
  selector: 'app-apps-list',
  imports: [FiltersContainerComponent],
  template: `
    <app-filters-container />
    <h1>Apps List component here!</h1>
  `,
  styleUrls: [],
})
export class AppsListComponent {}
