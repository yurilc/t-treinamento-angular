import { Directive, Input, OnChanges,
         Renderer2, ElementRef } from '@angular/core';


@Directive({
    selector: '[negativeHighlight]'
})
export class NegativeHighlightDirective
    implements OnChanges {
    @Input('negativeHighlight') value: number;

    constructor(private el: ElementRef,
                private renderer: Renderer2) {}

    ngOnChanges() {
        if(this.value < 0) {
            this.renderer.setStyle(
                this.el.nativeElement,
                'background-color',
                'red'
            );
        } else {
            this.renderer.setStyle(
                this.el.nativeElement,
                'background-color',
                'white'
            );
        }
    }
}