import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })

export class HighlightDirective {
    
    constructor(private e: ElementRef) { }

    @Input('myHighlight') highLightColor: string;

    @HostListener('mouseenter') onMouserEnter() {
        this.highlight(this.highLightColor ? this.highLightColor : 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.e.nativeElement.style.background = color;
    }
}

