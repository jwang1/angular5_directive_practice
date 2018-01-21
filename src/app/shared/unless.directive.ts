import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      // add the template
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      // clear the template
      this.vcRef.clear();
    }
  }

  // TemplateRef<any> tells WHAT,  and ViewContainerRef tells about WHERE
  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }
}
