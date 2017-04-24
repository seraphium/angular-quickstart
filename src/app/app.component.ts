import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  constructor() {}
  name: string = 'Angular';

  setName(newName: string) {
    this.name = newName;
  }

}
