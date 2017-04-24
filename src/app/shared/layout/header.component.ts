/**
 * Created by jackiezhang on 2017/4/24.
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styles: ['h2 { color: red}']
})
export class HeaderComponent {
  constructor() {}
  @Input() name: string = 'angular2';
  @Output() onNameChanged = new EventEmitter<string>();

  changeName(newName: string) {
    this.onNameChanged.emit(newName);
  }
}

