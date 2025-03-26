import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  template: `
    <button id="myBtn" (click)="cb()">Open Modal</button>
    <div id="myModal" class="modal" #modal>
      <div class="modal-content">
        <span class="close" (click)="closeModal(modal)">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  `,
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  @Input() cb!: () => void;
  
  openModal = (modal: HTMLDivElement) => {
    modal.style.display = 'block';
  };

  closeModal = (modal: HTMLDivElement) => {
    modal.style.display = 'none';
  };
}
