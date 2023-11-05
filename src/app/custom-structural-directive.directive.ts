import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStructuralDirective]'
})
export class CustomStructuralDirectiveDirective {

  constructor(
    private viewContainerRef:ViewContainerRef,
    private templateRef:TemplateRef<any>
    ) { }

  @Input('appCustomStructuralDirective') set render(times:number){
    this.viewContainerRef.clear();

    for(let i =0;i<times;i++){
      // this.viewContainerRef.createEmbeddedView(this.templateRef, {})
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        index:i,
        color:'red'
      })
    }
  }

}
