import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { Class2Directive } from './class2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    Class2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
