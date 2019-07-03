import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  authenticationState = new BehaviorSubject(false);
  isLoggedin = false;
  KEY = 'user_object';
  user: any;
  businessinfo:any;

  constructor() {
    this.checkUser();
  }

  login(user_object) {
    localStorage.setItem(this.KEY, JSON.stringify(user_object));
    this.authenticationState.next(true);
    this.isLoggedin = true;
  }

  logout() {
    localStorage.removeItem(this.KEY)
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkUser() {
      const data = localStorage.getItem(this.KEY);
      if (data !== null) {
        this.user = data;
        this.authenticationState.next(true);
        this.isLoggedin = true;
      } else {
        this.authenticationState.next(false);
        this.isLoggedin = false;
      }
  }

  getuser() {
      return JSON.parse(localStorage.getItem(this.KEY));
  }

  get_user_session() {
    return  this.isLoggedin;
  }
 addbusinessinfo(key:string, businessinfo){
  let KEY = key
  localStorage.setItem(KEY, JSON.stringify(businessinfo));
 }
 get_business_session(key){
   const data = localStorage.getItem(key);
   if(data != null){
     this.businessinfo = data;
   }
 }
}
