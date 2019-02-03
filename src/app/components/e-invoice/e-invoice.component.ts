import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ActivatedRoute, Router } from '@angular/router';

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


  constructor( public route: ActivatedRoute, public router : Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getbusiness(params['id']);  
    });
  }


  addinvoice(){

  }

  getbusiness( id){

  }

}
