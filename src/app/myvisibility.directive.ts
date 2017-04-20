import {Directive, Input, Renderer, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @Input() appMyvisibility: boolean

  constructor(public el: ElementRef, public rendere: Renderer) {
  }
  ngOnInit() {
    if ( this.appMyvisibility) {
      this.rendere.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }
}
