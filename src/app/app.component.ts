import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountDownTimerComponent} from './shared/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit{

  @ViewChild(CountDownTimerComponent)
  private timerComponent: CountDownTimerComponent;

  seconds() {
    return 0;
  }

  listValue: string[] = ['a','b','c'];

  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);

  }

  start() {
    this.timerComponent.start();
    this.listValue = [];
  }

  stop() {
    this.timerComponent.stop();
    this.listValue = ['a','b','c'];
  }


  constructor() {}
  name: string = 'Angular';

  setName(newName: string) {
    this.name = newName;
  }

}
