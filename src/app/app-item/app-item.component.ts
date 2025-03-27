import { Component } from '@angular/core';
import { RatingComponent } from './rating-component';
import { CustomButton } from '../custom-button/custom-button.component';
import { CustomButtonSettings } from '../custom-button/custom-button-settings.type';

@Component({
  selector: 'app-app-item',
  imports: [RatingComponent, CustomButton],
  template: `
    <details>
      <summary>
        <div class="app-item-container">
          <img
            class="app-item-image"
            src="https://picsum.photos/324/150"
            alt="app item picture"
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
          <div class="current-rating-text">Current Rating: 5</div>
          <app-app-item-rating />
          <app-custom-button [buttonSettings]="dropRatingButtonSettings" />
        </div>
        <div class="comment">
          <span (click)="testCommentFunc()" #comment>Commentss field here</span>
          <input type="text" [placeholder]="comment.textContent" />
          <button>Confirm</button>
        </div>
        <div class="user-tags">
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings" />
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings" />
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
          <div class="user-tag-container">
            <p>#Tag 1</p>
            <app-custom-button [buttonSettings]="deleteTagButtonSettings"/>
          </div>
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

  dropRatingButtonSettings: CustomButtonSettings = {
    text: 'Drop Rating',
    className: 'big-button',
    cb: () => {
      console.log('clicking drop rating button');
    },
  };

  deleteTagButtonSettings: CustomButtonSettings = {
    text: 'x',
    className: 'small-button',
    cb: () => {
      console.log('clicking delete tag button');
    },
  };
}
