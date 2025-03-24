import { Component, Input } from '@angular/core';
import { AppId } from './appid-item.type';

@Component({
  selector: 'app-appid-item',
  imports: [],
  template: `<div class="appid-item">
    <div class="appid-item-text">
      <p>{{ appId.appid }}</p>
    </div>
    <div class="appid-item-text">
      <p>{{ appId.created_at }}</p>
    </div>
    <div class="appid-item-text">
      <p>{{ appId.updated_at }}</p>
    </div>
  </div>`,
  styleUrls: ['appid-item.component.css'],
})
export class AppIdItem {
  @Input() appId!: AppId;
}
