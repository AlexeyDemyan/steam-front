import { Component } from '@angular/core';
import { FiltersContainerComponent } from '../filters-container/filters-container.component';
import { AppItemComponent } from '../app-item/app-item.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-apps-list',
  imports: [FiltersContainerComponent, AppItemComponent, ModalComponent],
  template: `
    <app-filters-container />
    <app-app-item />
    <app-app-item />
    <app-app-item />
  `,
  styleUrls: [],
})
export class AppsListComponent {}
