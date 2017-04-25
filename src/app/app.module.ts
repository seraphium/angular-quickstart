import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent, CountDownTimerComponent } from './shared/index';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CountDownTimerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
