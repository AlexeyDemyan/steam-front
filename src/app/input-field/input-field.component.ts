import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  template: `<div class="form__group field">
    <input
      type="input"
      class="form__field"
      placeholder="Name"
      name="name"
      id="name"
      required
      (input)="cb()"
    />
    <label for="name" class="form__label">Name</label>
  </div>`,
  styleUrls: ['input-field.component.css'],
})
export class InputFieldComponent {
  testFunc = () => {
    console.log('heya');
  };

  @Input() cb!: () => void;
}
