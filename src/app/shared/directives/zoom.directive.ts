import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  @Input() color: string;
  @Input() sizeFont: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('click') clickListen() {
    this.upFont();
  }

  upFont() {
    this.el.nativeElement.style.fontSize = this.sizeFont + 'px';
    this.el.nativeElement.style.display = 'block';
    this.el.nativeElement.style.border = '2px solid #' + this.color;
  }
}
