import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent, CountDownTimerComponent } from './shared/index';
import { BoldHoverDirective } from './bold-hover.directive';

@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CountDownTimerComponent, BoldHoverDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
