import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
api_url: string;
  headers: Headers;
  options: RequestOptions;
  constructor(public http: Http) {
    this.api_url = "http://10.111.7.115/imuka_rest_api/welcome/";
     this.headers = new Headers();
    this.headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    this.headers.append("Accept", "application/json");
    this.options = new RequestOptions({ headers: this.headers });
  }

  login(user){
   let body = "email=" + user.email + "&password=" + user.password;
    return this.http
      .post(this.api_url + "login/Json", user, this.options)
      .pipe(map(res => res.json()));

  }
  signup(user){
  
    return this.http
      .post(this.api_url + "createuser/json", user, this.options)
      .pipe(map(res => res.json()));

  } 
  verify(user){
  
    return this.http
      .post(this.api_url + "verifycode/json", user, this.options)
      .pipe(map(res => res.json()));

  }
 

}
