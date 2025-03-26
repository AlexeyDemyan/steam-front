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
          <div class="current-rating-text">Current Rating</div>
          <div class="current-rating-value">5</div>
          <app-app-item-rating />
          <button class="drop-rating">Drop Rating</button>
        </div>
        <div class="comment">
          <span (click)="testCommentFunc()" #comment>Commentss field here</span>
          <input type="text" [placeholder]="comment.textContent" />
          <button>Confirm</button>
        </div>
        <div class="user-tags">
          <p>#Tag 1</p>
          <button>del</button>
          <p>#Another tag</p>
          <button>del</button>
          <p>#And yet another tag</p>
          <button>del</button>
          <p>#Oh one more tag!</p>
          <button>del</button>
          <p>#Tag 1</p>
          <button>del</button>
          <p>#Another tag</p>
          <button>del</button>
          <p>#And yet another tag</p>
          <button>del</button>
          <p>#Oh one more tag!</p>
          <button>del</button>
          <p>#Tag 1</p>
          <button>del</button>
          <p>#Another tag</p>
          <button>del</button>
          <p>#And yet another tag</p>
          <button>del</button>
          <p>#Oh one more tag!</p>
          <button>del</button>
          <p>#Tag 1</p>
          <button>del</button>
          <p>#Another tag</p>
          <button>del</button>
          <p>#And yet another tag</p>
          <button>del</button>
          <p>#Oh one more tag!</p>
          <button>del</button>
          <select name="new-tag" id="new-tag">
            <option value=""></option>
            <option value="Some new tag">Some new tag</option>
            <option value="Another new tag">Another new tag</option>
            <option value="And another new tag">And another new tag</option>
          </select>
        </div>
        <button class="delete-button">[Delete]</button>
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
