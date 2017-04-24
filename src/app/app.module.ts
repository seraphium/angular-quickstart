import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent } from './shared/index';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
