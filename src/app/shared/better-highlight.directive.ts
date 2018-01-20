import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elemRef: ElementRef, private renderRef: Renderer2) {}

  ngOnInit() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'backgroundColor', 'lightblue');
  }

  @HostListener('mouseenter') mouseOver() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'backgroundColor', 'lightgreen');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
  }
}
