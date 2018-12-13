import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [1,2,3,4,5,6,7,8,8];
  constructor() { }

  ngOnInit() {
  }

}
