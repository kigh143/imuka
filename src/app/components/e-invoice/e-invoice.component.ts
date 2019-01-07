import { Component, OnInit } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-e-invoice',
  templateUrl: './e-invoice.component.html',
  styleUrls: ['./e-invoice.component.css']
})
export class EInvoiceComponent implements OnInit {
  events = [1,2,3];
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo', price:"3000"},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat', price:"1000"},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter', price:"4000"},
  ];

  headElements = ['Id', 'Item', 'unit price', 'Unit', 'Price'];

  constructor() { }

  ngOnInit() {
  }


addinvoice(){
 
  }

}
