import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appActiveItem]'
})
export class ActiveItemDirective {
  @HostBinding('style.border-color') borderColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.borderColor = '#00a718';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('#ddd');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('#fff');
  }


  private changeColor(newColor: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', newColor);
  }

}
