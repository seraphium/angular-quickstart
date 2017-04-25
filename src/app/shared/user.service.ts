/**
 * Created by jackiezhang on 2017/4/25.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() {}

  currentUser = 'Eric';

  setUser(name: string) {
    this.currentUser = name;
  }

}


