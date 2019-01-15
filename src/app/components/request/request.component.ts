import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  requests=[1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
