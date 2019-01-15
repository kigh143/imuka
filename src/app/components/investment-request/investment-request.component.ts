import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-request',
  templateUrl: './investment-request.component.html',
  styleUrls: ['./investment-request.component.scss']
})
export class InvestmentRequestComponent implements OnInit {
  requests=[1, 2, 3, 4, 5];
  oneAtATime: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
