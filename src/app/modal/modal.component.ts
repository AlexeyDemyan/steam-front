import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  template: `
    <button id="myBtn" (click)="openModal()">Open Modal</button>
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  `,
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  openModal = () => {
    console.log('opening modal');
  };

  closeModal = () => {
    console.log('closing modal');
  };
}
