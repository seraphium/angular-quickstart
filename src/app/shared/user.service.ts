/**
 * Created by jackiezhang on 2017/4/25.
 */
import { Injectable } from '@angular/core';
import { Http, Response }from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  constructor(
    private http: Http
  ) {
    this.currentUserSubject.subscribe((val) => {
      console.log(val);
    });

  }

  private currentUserSubject = new BehaviorSubject<string>('eric');
  public currentUser = this.currentUserSubject.asObservable();

  setUser(name: string) {
    this.currentUserSubject.next(name);
  }

  getUser(){
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`)
      .map((res: Response) => res.json())
  }
}


