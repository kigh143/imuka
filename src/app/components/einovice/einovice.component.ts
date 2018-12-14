import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-einovice',
  templateUrl: './einovice.component.html',
  styleUrls: ['./einovice.component.css']
})
export class EinoviceComponent implements OnInit {
  events = [1,2,3,4,5,6,7,8,8];
  constructor() { }

  ngOnInit() {
  }

}
