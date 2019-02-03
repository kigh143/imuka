import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ActivatedRoute, Router } from '@angular/router';
import {BizService} from "../../provider/biz.service";


@Component({
selector: 'app-e-invoice',
templateUrl: './e-invoice.component.html',
styleUrls: ['./e-invoice.component.scss']
})
export class EInvoiceComponent implements OnInit {

invoices: any = [
{id: 1, first: 'Mark', last: 'Otto', handle: '@mdo', price:"3000"},
{id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat', price:"1000"},
{id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter', price:"4000"},
];

business: any;

  constructor( public route: ActivatedRoute, public router : Router, public businessService: BizService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getbusiness(params['id']);  
      this.get_invoices(params['id']);
    });
  }


  addinvoice(){

  }

  get_invoices( business_id ){

  }

  getbusiness( id ){
    this.businessService.fetch_abusiness(id).subscribe( data => {
      this.business = data["business_info"];
    }, error =>{
      console.log(error);
    });
  }

}
