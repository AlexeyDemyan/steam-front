import { Component, Input } from '@angular/core';
import { AppId } from './appid-item.type';

@Component({
  selector: 'app-appid-item',
  imports: [],
  template: `<div class="appid-item">
    <p>{{ appId.appid }}</p>
    <p>{{ appId.created_at }}</p>
    <p>{{ appId.updated_at }}</p>
  </div>`,
  styleUrls: ['appid-item.component.css'],
})
export class AppIdItem {
  @Input() appId!: AppId;
}
