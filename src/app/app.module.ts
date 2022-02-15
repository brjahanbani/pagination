import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { Class2Directive } from './class2.directive';
import { SetClassDirective } from './set-class.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    Class2Directive,
    SetClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
