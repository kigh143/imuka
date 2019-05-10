import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { api_base_url} from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class SessionapiService {
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

  creatsession(session) {
    return this.http
    .post(this.api_url + 'creatsession/json', session, this.options)
    .pipe(map(res => res.json()));
  }

  getmysessions(user_id) {
    return this.http
    .get(this.api_url + 'getmysessions/added_by/'+user_id+'/json')
    .pipe(map(res => res.json()));
  }

  getsessions() {
    return this.http
    .get(this.api_url + 'getsessions/json')
    .pipe(map(res => res.json()));
  }
     
  commentonsession(comment) { return this.http
    .post(this.api_url + 'commentonsession/json', comment, this.options)
    .pipe(map(res => res.json()));
  }

  attendsession(attend) {
    return this.http
    .post(this.api_url + 'attendsession/json', attend, this.options)
    .pipe(map(res => res.json()));
  }

  getuserattendance(user_id) {
    return this.http
    .get(this.api_url + 'getuserattendance/user_id/'+user_id+'/json')
    .pipe(map(res => res.json()));
  }

  getasession(session_id) {
    return this.http
    .get(this.api_url + 'getasession/session_id/'+session_id+'/json')
    .pipe(map(res => res.json()));
  }

}
