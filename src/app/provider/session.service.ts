import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  authenticationState = new BehaviorSubject(false);
  KEY = "user_object";
  constructor(public localStorage: LocalStorage) {}

  login(user_object) {
    this.localStorage.setItem(this.KEY, user_object).subscribe((data) => {
    this.authenticationState.next(true);
    this.checkUser();
    }, error => {
        this.authenticationState.next(false);
    });
  }

  logout() {
    this.localStorage.removeItem(this.KEY).subscribe((data) => {
    this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkUser() {
      this.localStorage.getItem(this.KEY).subscribe((data) => {
        if (data !== null) {
            this.authenticationState.next(true);
          } else {
            this.authenticationState.next(false);
          }
      });
  }

  getuser(){
      return  this.localStorage.getItem(this.KEY);
  }
}
