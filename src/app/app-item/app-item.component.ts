import { Component } from '@angular/core';

@Component({
  selector: 'app-app-item',
  imports: [],
  template: `
    <div class="app-item-box">
      <div class="app-item-container">
        <img src="/assets/desert.jpg" alt="desert" width="324" height="150">
      </div>
    </div>
  `,
  styleUrls: ['app-item.component.css'],
})
export class AppItemComponent {}
