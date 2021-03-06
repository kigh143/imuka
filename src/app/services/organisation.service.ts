import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { api_base_url } from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  api_url: string ;
  headers: any;
  options: any;

  constructor( public http: Http ) {
    this.api_url = api_base_url;
    this.headers = new Headers();
    this.headers.append(
      'Content-Type',
      'application/x-www-form-urlencoded; charset=UTF-8'
    );
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({ headers: this.headers });
   }

  create_organisation(organisation) {
    return this.http
    .post(this.api_url + 'createorganisation/json', organisation, this.options)
    .pipe(map(res => res.json()));
  }

  login(organisation) {
    return this.http
    .post(this.api_url + 'orglogin/json', organisation, this.options)
    .pipe(map(res => res.json()));
  }

  get_orgsanisation(org_id) {
    return this.http
    .get(this.api_url + 'getorganisation/org_id/' + org_id + '/json')
    .pipe(map(res => res.json()));
  }

  get_all_orginsations() {
    return this.http
    .get(this.api_url + 'getorganisations/json')
    .pipe(map(res => res.json()));
  }

  edit_orgsanisation(organisation) {
    return this.http
    .post(this.api_url + 'editorganisation/json', organisation, this.options)
    .pipe(map(res => res.json()));
  }

  organisation_data(org_id) {
      return this.http
      .get(this.api_url + 'getorganisationdata/org_id/' + org_id + '/json')
      .pipe(map(res => res.json()));
  }

  uploadAndProgress(files: File[], type: string, id: number) {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f ));
    return this.http.post('http://imukaaccess.com/welcome/upload/type/' + type + '/id/' + id + '/json', formData)
    .pipe(map(res => res.json()));
  }
}
