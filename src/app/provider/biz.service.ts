import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { api_base_url} from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class BizService {
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

  addbiz(biz) {
      return this.http
      .post(this.api_url + 'addbusiness/json', biz, this.options)
      .pipe(map(res => res.json()));

  }
   addproduct(product) {
      return this.http
      .post(this.api_url + 'addproduct/json', product, this.options)
      .pipe(map(res => res.json()));

  }
   addfinancial(financial) {
      return this.http
      .post(this.api_url + 'addfinancials/json', financial, this.options)
      .pipe(map(res => res.json()));

  }
   adddocument(document) {
      return this.http
      .post(this.api_url + 'adddocument/json', document, this.options)
      .pipe(map(res => res.json()));

  }
   addteam(team) {
      return this.http
      .post(this.api_url + 'addteam/json', team, this.options)
      .pipe(map(res => res.json()));

  }


  fetch_abusiness(biz_id) {
    return this.http
      .get(this.api_url + 'getabusiness/business_id/'+ biz_id +'/json')
      .pipe(map(res => res.json()));
  }

  getbusinesses_for_user(user_id) {
   return this.http
      .get(this.api_url + 'getbusinesses/user_id/'+user_id+'/json')
      .pipe(map(res => res.json()));
  }

  add_invoice(data) {
    return this.http
      .post(this.api_url + 'addinvoice/json', data, this.options)
      .pipe(map(res => res.json()));
  }

  get_invoices(id) {
    return this.http
    .get(this.api_url + 'getinvoices/business_id/' + id + '/json')
    .pipe(map(res => res.json()));
  }

  adddailyupdates(dailyupdates) {
      return this.http
      .post(this.api_url + 'adddailyupdate/json', dailyupdates, this.options)
      .pipe(map(res => res.json()));
  }

  sendrequest(request) {
    return this.http
      .post(this.api_url + 'addrequest/json', request, this.options)
      .pipe(map(res => res.json()));
  }

  fetchrequest(user_id) {
    return this.http
  .get(this.api_url + 'getrequests/user_id/' + user_id + '/json')
  .pipe(map(res => res.json()));
  }

  getallbusinesses() {
    return this.http
      .get(this.api_url + 'getallbusinesses/json')
      .pipe(map(res => res.json()));
  }
  requestpayment(invoice_id) {
    return this.http
      .get(this.api_url + 'requestfund/invoice_id/' + invoice_id + '/json')
      .pipe(map(res => res.json()));
  }

  fetchrequests_for_organisatio_and_user(user_id, org_id) {
    return this.http
    .get(this.api_url + 'organisationrequests/org_id/' + org_id + '/user_id/' + user_id + '/json')
    .pipe(map(res => res.json()));
  }

  get_investmentable_business(user_id){
    return this.http
      .get(this.api_url + 'get_investmentable_business/user_id'+ user_id + '/json')
      .pipe(map(res => res.json()));

  }
  send_org_iquiry(data) {
    return this.http
    .post(this.api_url + 'sendorgiquiry/json', data, this.options)
    .pipe(map(res => res.json()));

  }
  
  sendinvestrequest(invest_request){
    return this.http
      .post(this.api_url + 'sendinvestrequest/json', invest_request, this.options)
      .pipe(map(res => res.json()));
  }

  updatebusiness(business_data){
    return this.http
      .post(this.api_url + "editbusiness/json",business_data, this.options)
      .pipe(map(res => res.json()));
  }

  imuka_programs() {
      return [
        {
          id: 1,
          name: 'personalised Support',
          price: '$250',
          period: '8months',
          description: 'plus Success feesn Based on finance received:2% if debt, 3% if equity, 5% if grant',
          img: 'assets/person.png'
        },
        {
          id: 2,
          name: 'personalised Support',
          price: '$500',
          period: '2 yrs',
          img: 'assets/person.png',
          description: 'plus Success feesn Based on finance received:2% if debt, 3% if equity, 5% if grant'
        },
        {
          id: 3,
          name: 'Enlisting',
          price: '$50',
          period: '1 yr',
          img: 'assets/list.png',
          description: 'plus Success feesn Based on finance received:2% if debt, 3% if equity, 5% if grant'
        },
        {
          id: 4,
          name: 'Industry cost',
          price: '$1500',
          period: '1 yr',
          img: 'assets/industry.png',
          description: 'plus Success feesn Based on finance received:2% if debt, 3% if equity, 5% if grant'        
        },
      ];

  }

  apply_for_program( application ) {
    return this.http
    .post(this.api_url + 'applyforprogram/json', application, this.options)
    .pipe(map(res => res.json()));

  }

  get_pitch_book( business_id ) {
    return this.http
    .get(this.api_url + 'getpitchbook/business_id/' + business_id + '/json')
    .pipe(map(res => res.json()));
  }

  edit_pitchbook(data) {
    return this.http
    .post(this.api_url + 'editpitchbook/json', data, this.options)
    .pipe(map(res => res.json()));
  }
}
