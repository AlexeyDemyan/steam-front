import { Component } from '@angular/core';
import { RatingComponent } from './rating-component';

@Component({
  selector: 'app-app-item',
  imports: [RatingComponent],
  template: `
    <details>
      <summary>
        <div class="app-item-container">
          <img
            class="app-item-image"
            src="/assets/desert.jpg"
            alt="desert"
            width="324"
            height="150"
          />
          <h3 class="app-item-title">App Title</h3>
          <div class="app-item-description">
            <p class="app-item-description-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              culpa quos. Beatae libero excepturi nihil et fugit minus est
              debitis id numquam aut! Eum facilis error illo? Harum, debitis
              voluptatum.
            </p>
          </div>
          <div class="app-item-tags">
            <p>#Tag 1</p>
            <p>#Another tag</p>
            <p>#And yet another tag</p>
            <p>#Oh one more tag!</p>
            <p>#Tag 1</p>
            <p>#Another tag</p>
            <p>#And yet another tag</p>
            <p>#Oh one more tag!</p>
            <p>#Tag 1</p>
            <p>#Another tag</p>
            <p>#And yet another tag</p>
            <p>#Oh one more tag!</p>
            <p>#Tag 1</p>
            <p>#Another tag</p>
            <p>#And yet another tag</p>
            <p>#Oh one more tag!</p>
          </div>
        </div>
      </summary>
      <div class="extra-info">
        <div class="rating">
          <app-app-item-rating />
        </div>
        <div class="comment">
          <span (click)="testCommentFunc()">Comment field here</span>
        </div>
        <div class="user-tags">
          <p>#Tag 1</p>
          <p>#Another tag</p>
          <p>#And yet another tag</p>
          <p>#Oh one more tag!</p>
          <p>#Tag 1</p>
          <p>#Another tag</p>
          <p>#And yet another tag</p>
          <p>#Oh one more tag!</p>
          <p>#Tag 1</p>
          <p>#Another tag</p>
          <p>#And yet another tag</p>
          <p>#Oh one more tag!</p>
          <p>#Tag 1</p>
          <p>#Another tag</p>
          <p>#And yet another tag</p>
          <p>#Oh one more tag!</p>
        </div>
        <div class="delete-button">[Delete]</div>
      </div>
    </details>
  `,
  styleUrls: ['app-item.component.css'],
})
export class AppItemComponent {
  testCommentFunc = () => {
    console.log('testing comment functionality');
  };
}
