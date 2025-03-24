import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIdItem } from '../appid-item/appid-item.component';
import { AppIdItemHeader } from '../appid-item/appid-item-header.component';
import { AppId } from '../appid-item/appid-item.type';
import { AppIdsService } from '../services/appids.service';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-appids-list',
  imports: [CommonModule, AppIdItem, AppIdItemHeader, InputFieldComponent],
  template: `
    <app-input-field />
    <!-- <form>
      <input type="text" placeholder="Filter by ID" #filter />
      <button
        class="primary"
        type="button"
        (click)="filterResults(filter.value)"
      >
        Search
      </button>
    </form> -->
    <app-appid-item-header />
    <app-appid-item *ngFor="let appid of filteredAppIdsList" [appId]="appid" />
  `,
  styleUrls: [],
})
export class AppidsListComponent {
  appIdsService: AppIdsService = inject(AppIdsService);
  appIdsList: AppId[] = [];
  filteredAppIdsList: AppId[] = [];

  filterResults(text: string) {
    if (!text) {
      this.filteredAppIdsList = this.appIdsList;
      return;
    }

    this.filteredAppIdsList = this.appIdsList.filter((appid) =>
      appid.appid.toString().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.appIdsService.getAllAppIds().then((appIdsList: AppId[]) => {
      this.appIdsList = appIdsList;
      this.filteredAppIdsList = appIdsList;
    });
  }
}
