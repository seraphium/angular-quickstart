/**
 * Created by zezhang on 2017/4/25.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  template: `<div>this is the home page. Go to <a [routerLink]="['profile']">Eric's profile</a></div>`
})

export class HomeComponent {
  constructor(){}

}
