import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mycomp',
  template: `
    <ol>
      <li>
        array list
        <ul>
          <li *ngFor="let item of lists">{{item}}</li>
        </ul>
      </li>
      <li>
        upper Directive
        <ul>
          <li appUpper *ngFor="let item of lists">{{item}}</li>
          <p appUpper>adsf</p>
        </ul>
      </li>
      <li>
        myvisibility Directive
        <p [appMyvisibility] =true>1. Highlighted in yellow</p>
        <p [appMyvisibility] =false>2. Highlighted in orange</p>
        <p [appMyvisibility] =true>3. Highlighted in yellow</p>
        <p [appMyvisibility] =false>4. Highlighted in orange</p>
      </li>
      <li>
        color change Directive selected color is: {{counterValue}}
        <div appMycolor (myColor) = "counterValue = $event">
          <p>this is my color app</p>
        </div>
      </li>
    </ol>
  `,
  styles: []
})
export class MycompComponent implements OnInit {
  lists: Array<string>;
  constructor() { }

  ngOnInit() {
  }

  @Input('items')
  set items(value: Array<string> ) {
    this.lists = value;
  }

}
