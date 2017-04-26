/**
 * Created by zezhang on 2017/4/25.
 */
import { Component} from '@angular/core';
import {UserService} from "./shared/user.service";

@Component({
  selector: 'profile-page',
  template: `<div><button (click)="loadUser()">Load Profile</button>
  {{ profile | json }}
  </div>`
})

export class ProfileComponent {
  constructor(
    private userService: UserService
  ){}

  profile = {};

  loadUser()  {
      this.userService.getUser().subscribe(data => this.profile = data);
  }

}
