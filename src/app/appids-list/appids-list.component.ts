import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIdItem } from '../appid-item/appid-item.component';
import { AppId } from '../appid-item/appid-item.type';
import { AppIdsService } from '../services/appids.service';

@Component({
  selector: 'app-appids-list',
  imports: [CommonModule, AppIdItem],
  template: `
    <h2 class="appids-list">Rendering AppIds list here!</h2>
    <app-appid-item *ngFor="let appid of appIdsList" [appId]="appid" />
  `,
  styleUrls: ['appids-list.component.css'],
})
export class AppidsListComponent {
  appIdsService: AppIdsService = inject(AppIdsService);
  appIdsList: AppId[] = [];

  constructor() {
    this.appIdsService.getAllAppIds().then((appIdsList: AppId[]) => {
      this.appIdsList = appIdsList;
    });
  }
}
