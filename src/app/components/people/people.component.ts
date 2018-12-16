import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [1, 3,3,4,6,7,8,9,7,8,6,7,8,9,7,5,9,7];
  constructor() { }

  ngOnInit() {
  }

}
