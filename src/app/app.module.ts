import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BasicHighlightDirective} from './shared/basic-highlight.directive';
import {BetterHighlightDirective} from './shared/better-highlight.directive';
import { UnlessDirective } from './shared/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
