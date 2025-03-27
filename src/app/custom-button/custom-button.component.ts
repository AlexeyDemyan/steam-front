import { Component, Input } from '@angular/core';
import { CustomButtonSettings } from './custom-button-settings.type';

@Component({
  selector: 'app-custom-button',
  imports: [],
  template: `
    <span [class]="'custom-button ' + buttonSettings.className" (click)="buttonSettings.cb()">{{
      buttonSettings.text
    }}</span>
  `,
  styleUrls: ['custom-button.component.css'],
})
export class CustomButton {
  @Input() buttonSettings!: CustomButtonSettings;
}
