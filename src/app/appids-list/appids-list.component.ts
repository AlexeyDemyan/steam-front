import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIdItem } from '../appid-item/appid-item.component';
import { AppIdItemHeader } from '../appid-item/appid-item-header.component';
import { AppId } from '../appid-item/appid-item.type';
import { AppIdsService } from '../services/appids.service';

@Component({
  selector: 'app-appids-list',
  imports: [CommonModule, AppIdItem, AppIdItemHeader],
  template: `
    <app-appid-item-header />
    <app-appid-item *ngFor="let appid of appIdsList" [appId]="appid" />
  `,
  styleUrls: [],
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
