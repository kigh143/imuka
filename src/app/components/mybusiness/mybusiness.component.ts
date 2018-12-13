import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybusiness',
  templateUrl: './mybusiness.component.html',
  styleUrls: ['./mybusiness.component.css']
})
export class MybusinessComponent implements OnInit {
  businesses = [1, 2, 3, 4, 5];
  constructor() {

  }

  ngOnInit() {
  }

}
