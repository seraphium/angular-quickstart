/**
 * Created by jackiezhang on 2017/4/24.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: ['h2 { color: red}']
})
export class HeaderComponent {
  constructor(
    private userService: UserService
  ) {}
  @Input() name: string = 'angular2';
  @Output() onNameChanged = new EventEmitter<string>();

  user = this.userService.currentUser;

  changeName(newName: string) {
    this.onNameChanged.emit(newName);
  }

  changeUser(newUser: string) {
    this.userService.setUser(newUser)
  }

}

