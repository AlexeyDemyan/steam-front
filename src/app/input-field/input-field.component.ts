import { Component, Input } from '@angular/core';
import { AppIdSearchField } from './appid-search-field.type';

@Component({
  selector: 'app-input-field',
  imports: [],
  template: `<div class="form__group field">
    <input
      [type]="settings.inputType"
      [class]="'form__field ' + settings.class"
      [placeholder]="settings.placeholder"
      [name]="settings.name"
      [id]="settings.id"
      required
      (input)="settings.cb(inputField.value)"
      #inputField
    />
    <label for="settings.name" class="form__label">{{
      settings.placeholder
    }}</label>
  </div>`,
  styleUrls: ['input-field.component.css'],
})
export class InputFieldComponent {
  @Input() settings!: AppIdSearchField;
}
