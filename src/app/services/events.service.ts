import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  api_url: string ;
  headers: any;
  options: any;

  constructor( public http: Http ) {
    this.api_url = "http://10.111.9.58/imuka_rest_api/welcome/";
		this.headers = new Headers();
		this.headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    this.headers.append("Accept", "application/json");
    this.options = new RequestOptions({ headers: this.headers });
   }


   add_event( event ){
    return this.http
    .post(this.api_url + "addevent/json", event, this.options)
    .pipe(map(res => res.json()));
   }

   fetch_events(){
    return this.http
    .get(this.api_url + "getevents/json").pipe(map(res => res.json()));
   }

   fetch_opportunities(){
    return this.http
    .get(this.api_url + "getopportunities/json").pipe(map(res => res.json()));
   }

   add_opportunities(data){
    return this.http
    .post(this.api_url + "addopportunity/json", data, this.options)
    .pipe(map(res => res.json()));
   }
}
