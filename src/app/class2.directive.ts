import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass2]',
})
export class Class2Directive {
  @Input() set backgroundColor(color: string) {
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
  @Input() set color(colorFont: string) {
    this.elementRef.nativeElement.style.color = colorFont;
  }
  constructor(private elementRef: ElementRef) {}
}
