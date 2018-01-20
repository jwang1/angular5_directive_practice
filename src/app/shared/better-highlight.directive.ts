import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // binding attribute for that element applied with this Directie of [appBetterHighlight]
  @HostBinding('style.color') fontColor = 'black';

  constructor(private elemRef: ElementRef, private renderRef: Renderer2) {}

  ngOnInit() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'backgroundColor', 'lightblue');
  }

  @HostListener('mouseenter') mouseOver() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'backgroundColor', 'lightgreen');

    this.fontColor = 'red';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');

    this.fontColor = 'blue';
  }

}
