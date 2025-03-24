import { Component} from '@angular/core';

@Component({
  selector: 'app-appid-item-header',
  imports: [],
  template: `<div class="appid-item ">
    <div class="appid-item-text appid-item-header">
      <p>App ID</p>
    </div>
    <div class="appid-item-text appid-item-header">
      <p>Created At</p>
    </div>
    <div class="appid-item-text appid-item-header">
      <p>Updated At</p>
    </div>
  </div>`,
  styleUrls: ['appid-item.component.css'],
})
export class AppIdItemHeader {
}
