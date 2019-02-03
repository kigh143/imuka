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

invoices: any;
business: any;

  constructor( public route: ActivatedRoute, public router : Router, public businessService: BizService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getbusiness(params['id']);  
      this.get_invoices(params['id']);
    });
  }

  get_invoices( business_id ){
      this.businessService.get_invoices(business_id).subscribe( data => {
          this.invoices = data;
      }, error =>{
        console.log(error);
      })
  }

  getbusiness( id ){
      this.businessService.fetch_abusiness(id).subscribe( data => {
        this.business = data["business_info"];
      }, error =>{
        console.log(error);
      });
  }

}
