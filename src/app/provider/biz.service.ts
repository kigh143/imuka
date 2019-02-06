import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BizService {
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

  addbiz(biz){
 	return this.http
      .post(this.api_url + "addbusiness/json", biz, this.options)
      .pipe(map(res => res.json()));

  }
   addproduct(product){
 	return this.http
      .post(this.api_url + "addproduct/json", product, this.options)
      .pipe(map(res => res.json()));

  }
   addfinancial(financial){
 	return this.http
      .post(this.api_url + "addfinancial/json", financial, this.options)
      .pipe(map(res => res.json()));

  }
   adddocument(document){
 	return this.http
      .post(this.api_url + "adddocument/json", document, this.options)
      .pipe(map(res => res.json()));

  }
   addteam(team){
 	return this.http
      .post(this.api_url + "addteam/json", team, this.options)
      .pipe(map(res => res.json()));

  }


  fetch_abusiness(biz_id){
    return this.http
      .get(this.api_url + "getabusiness/business_id/"+ biz_id +"/json")
      .pipe(map(res => res.json()));
  }

  getbusinesses(user_id){
   return this.http
      .get(this.api_url + "getbusinesses/user_id/"+user_id+"/json")
      .pipe(map(res => res.json()));
  
  }

  add_invoice(data){
    return this.http
      .post(this.api_url + "addinvoice/json", data, this.options)
      .pipe(map(res => res.json()));
  }

  get_invoices(id){
    return this.http
    .get(this.api_url + "getinvoices/business_id/"+id+"/json")
    .pipe(map(res => res.json()));
  }
  adddailyupdates(dailyupdates){
    return this.http
        .post(this.api_url + "adddailyupdates/json", dailyupdates, this.options)
        .pipe(map(res => res.json()));
  
    }
    sendrequest(request){
      return this.http
        .post(this.api_url + "addrequest/json", request, this.options)
        .pipe(map(res => res.json()));
  
    }
    fetchrequest(user_id){
      return this.http
    .get(this.api_url + "getrequests/user_id/"+user_id+"/json")
    .pipe(map(res => res.json()));
  }
    
}
