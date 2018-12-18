import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-invoice',
  templateUrl: './e-invoice.component.html',
  styleUrls: ['./e-invoice.component.css']
})
export class EInvoiceComponent implements OnInit {
  events = [1,2,3];
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'ITEM', 'UNIT PRICE', 'UNIT', 'PRICE'];

  constructor() { }

  ngOnInit() {
  }

}
