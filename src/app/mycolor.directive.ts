import {Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  public el: ElementRef;
  colors = ['black', 'red', 'yellow', 'blue', 'gray', 'brown'];
  constructor(el: ElementRef) {
    this.el = el;
  }

  @Output('myColor') myColor = new EventEmitter();
  @HostListener('click') foo() {
    const selectedColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.el.nativeElement.style.color = selectedColor;
    this.myColor.emit(selectedColor);
  }

}
