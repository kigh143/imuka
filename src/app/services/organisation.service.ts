import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  api_url: string ;
  headers: any;
  options: any;

  constructor( public http: Http ) {
    this.api_url = "http://127.0.0.1/imuka_rest_api/welcome/";
		this.headers = new Headers();
		this.headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
    this.headers.append("Accept", "application/json");
    this.options = new RequestOptions({ headers: this.headers });
   }

  create_organisation(organisation){
    return this.http
    .post(this.api_url + "createorganisation/json", organisation, this.options)
    .pipe(map(res => res.json()));
  }
  
  login(organisation){
    return this.http
    .post(this.api_url + "orglogin/json", organisation, this.options)
    .pipe(map(res => res.json()));
  }

  get_orgsanisation(org_id){
    return this.http
    .get(this.api_url + "getorganisation/org_id/"+org_id+"/json")
    .pipe(map(res => res.json()));
  }

  get_all_orginsations(){
    return this.http
    .get(this.api_url + "getorganisations/json")
    .pipe(map(res => res.json()));
  }

}