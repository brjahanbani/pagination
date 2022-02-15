import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTimes]',
})
export class TimesDirective {
  @Input('appTimes') set render(time: number) {
    for (let i = 0; i < time; i++) {
      this.vcRef.createEmbeddedView(this.temlateRef, {});
    }
  }

  constructor(
    private temlateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
