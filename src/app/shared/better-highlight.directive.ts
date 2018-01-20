import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elemRef: ElementRef, private renderRef: Renderer2) {}

  ngOnInit() {
    this.renderRef.setStyle(this.elemRef.nativeElement, 'backgroundColor', 'lightblue');
  }
}
