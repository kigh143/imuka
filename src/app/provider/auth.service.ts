import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { api_base_url} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url: string;
  headers: Headers;
  options: RequestOptions;
  constructor(public http: Http) {
    this.api_url = api_base_url;
    this.headers = new Headers();
    this.headers.append(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
  }

  login(user) {
    return this.http
      .post(this.api_url  +  'login/Json', user, this.options)
      .pipe(map(res => res.json()));
  }

  signup(user) {
    return this.http
      .post(this.api_url  +  'createuser/json', user, this.options)
      .pipe(map(res => res.json()));
  }

  verify(user) {
    return this.http
      .post(this.api_url  +  'verifycode/json', user, this.options)
      .pipe(map(res => res.json()));
  }

  forgotpass(user) {
   return this.http
     .post(this.api_url  +  'forgotpass/json', user, this.options)
      .pipe(map(res => res.json()));
  }

  edit_user(user, user_id) {
    return this.http
     .post(this.api_url  +  'editprofile/user_id/' + user_id + '/json', user, this.options)
      .pipe(map(res => res.json()));
  }

  get_all_users(value) {
    return this.http
    .get(this.api_url  +  'getallusers/user_id/'  +  value  +  '/json')
    .pipe(map(res => res.json()));
  }

  add_user_to_org(user) {
    return this.http
    .post(this.api_url  +  'addusertorg/json', user, this.options)
    .pipe(map(res => res.json()));
  }

  get_connection_requests(user_id) {
    return this.http
    .get(this.api_url  +  'getconnectionrequests/user_id/'  +  user_id  +  '/json')
    .pipe(map(res => res.json()));
  }

  request_connection(user_id, user_to_id) {
    return this.http
    .get(this.api_url  +  'requestconnection/user_id/'  +  user_id  +  '/user_to_id/'  +  user_to_id  +  '/json')
    .pipe(map(res => res.json()));
  }

  accept_connection_request(connection_id) {
    return this.http
    .get(this.api_url  +  'acceptconnection/connection_id/'  +  connection_id  +  '/json')
    .pipe(map(res => res.json()));
  }

  make_connection_request_seen(connection_id) {
    return this.http
    .get(this.api_url  +  'connectionseen/connection_id/'  +  connection_id  +  '/json')
    .pipe(map(res => res.json()));
  }

  get_friends(user_id) {
    return this.http
    .get(this.api_url  +  'getfriends/user_id/'  +  user_id  +  '/json')
    .pipe(map(res => res.json()));
  }

  changepassword(passwordchange) {
   return this.http
    .post(this.api_url  +  'changepassword/json', passwordchange,  this.options)
    .pipe(map(res => res.json()));
  }

  uploadAndProgress(files: File[], type: string, user_id: number) {
    console.log(files, type, user_id);
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f ));
    return this.http.post(this.api_url + 'upload', formData);
  }

  basicUpload(files: File[], type: string, user_id: number) {
    console.log(files, type, user_id);
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    return this.http.post(this.api_url + 'upload', formData);
  }

}
