import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent, CountDownTimerComponent } from './shared/index';
import { BoldHoverDirective } from './bold-hover.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { SharedModule } from './shared/index';

@NgModule({
  imports:      [ BrowserModule , SharedModule ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CountDownTimerComponent, BoldHoverDirective,
                  CapitalizePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
