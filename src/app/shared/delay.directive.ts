import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input('appDelay') config: {time: number, index: number};

  constructor(private template: TemplateRef<any>,
              private container: ViewContainerRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.container.createEmbeddedView(this.template);
    }, this.config.time * (this.config.index + 1));
  }

}
