import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-invoice',
  templateUrl: './e-invoice.component.html',
  styleUrls: ['./e-invoice.component.css']
})
export class EInvoiceComponent implements OnInit {
  events = [1,2,3,4,5,6,7,8,8];
  constructor() { }

  ngOnInit() {
  }

}
