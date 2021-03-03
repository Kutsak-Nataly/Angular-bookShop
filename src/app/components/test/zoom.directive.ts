import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontSize = '20px';
  }
}
