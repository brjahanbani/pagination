import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = '#B5BCBF';
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      '#B5BCBF'
    );
  }
}
