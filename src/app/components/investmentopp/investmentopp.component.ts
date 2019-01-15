import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investmentopp',
  templateUrl: './investmentopp.component.html',
  styleUrls: ['./investmentopp.component.scss']
})
export class InvestmentoppComponent implements OnInit {
  
  businesses = [1, 2];

  constructor() { }

  ngOnInit() {
  }

}
