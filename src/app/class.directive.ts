import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.backgroundColor = '#B5BCBF';
    // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','#B5BCBF');
  }
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = '#B5BCBF';
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   '#B5BCBF'
    // );
  }
  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = 'transparent';
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
  }
}
