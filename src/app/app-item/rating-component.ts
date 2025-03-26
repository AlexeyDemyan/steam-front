import { Component } from '@angular/core';

@Component({
  selector: 'app-app-item-rating',
  imports: [],
  template: `
    <span class="star-rating">
      <input
        type="radio"
        name="rating"
        value="1"
        (change)="testFunc(radioFieldOne.value)"
        #radioFieldOne
      /><i></i>
      <input
        type="radio"
        name="rating"
        value="2"
        (change)="testFunc(radioFieldTwo.value)"
        #radioFieldTwo
      /><i></i>
      <input
        type="radio"
        name="rating"
        value="3"
        (change)="testFunc(radioFieldThree.value)"
        #radioFieldThree
      /><i></i>
      <input
        type="radio"
        name="rating"
        value="4"
        (change)="testFunc(radioFieldFour.value)"
        #radioFieldFour
      /><i></i>
      <input
        type="radio"
        name="rating"
        value="5"
        (change)="testFunc(radioFieldFive.value)"
        #radioFieldFive
      /><i></i>
    </span>
  `,
  styleUrls: ['rating-component.css'],
})
export class RatingComponent {
  testFunc = (value: string) => {
    console.log(value);
  };
}

// $(':radio').change(
//     function(){
//       $('.choice').text( this.value + ' stars' );
//     }
//   )
