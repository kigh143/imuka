import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-request',
  templateUrl: './investment-request.component.html',
  styleUrls: ['./investment-request.component.css']
})
export class InvestmentRequestComponent implements OnInit {
  requests=[1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit() {
  }

}
