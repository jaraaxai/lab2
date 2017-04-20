import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
      this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML.toUpperCase();
  }

}
