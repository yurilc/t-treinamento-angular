import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: 'h3[highlight]'
})
export class HighlightDirective {

    @HostBinding('style.backgroundColor') 
    background = 'green';

    @HostBinding('style.color') 
    color = 'yellow';

    @HostListener('mouseover', ['$event.clientX', '$event.clientY'])
    changeBackgroundToRed(x: number, y: number) {
        this.background = 'red';
        console.log(x, y);
    }

    @HostListener('mouseleave') resetBackground() {
        this.background = 'green';
    }

}