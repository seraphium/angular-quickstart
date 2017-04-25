/**
 * Created by zezhang on 2017/4/25.
 */
import { Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = ``;
  seconds = 11;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  ngOnInit() {
    this.start();
  }
  ngOnDestroy() {
    this.clearTimer();
  }

  start() { this.countDown();}

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  countDown() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds == 0) {
        this.message = 'blast off!';
      } else {
        if (this.seconds < 0) {
          this.seconds = 10;
        } else {
          this.message = `T-${this.seconds} seconds and counting`;
        }
      }
    }, 1000);
  }


}

