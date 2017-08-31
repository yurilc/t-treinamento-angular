import { NgModule } from '@angular/core';
import { ResumePipe } from "./resume.pipe";
import { ReversePipe } from "./reverse.pipe";
import { NegativeHighlightDirective } from "./negative-highlight.directive";
import { DelayDirective } from "./delay.directive";
import { CommonModule } from "@angular/common";
import { HighlightDirective } from "./highlight.directive";

@NgModule({
    declarations:[
        ResumePipe,
        ReversePipe,
        NegativeHighlightDirective,
        DelayDirective,
        HighlightDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        ResumePipe,
        ReversePipe,
        NegativeHighlightDirective,
        DelayDirective,
        HighlightDirective
    ]
})
export class SharedModule {}