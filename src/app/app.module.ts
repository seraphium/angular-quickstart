import {ModuleWithProviders, NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import { HeaderComponent, FooterComponent, CountDownTimerComponent } from './shared/index';
import { BoldHoverDirective } from './bold-hover.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { SharedModule } from './shared/index';
import { HomeComponent }from './home.component';
import { ProfileComponent } from './profile.component';
import  { UserService } from './shared/index';

const rootRouting : ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  }
], {useHash:  true});

@NgModule({
  imports:      [ BrowserModule , SharedModule,rootRouting ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, CountDownTimerComponent, BoldHoverDirective,
                  CapitalizePipe, HomeComponent, ProfileComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
