import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {
  organisations = [1,2,3,4,5,6] 
  constructor() { }

  ngOnInit() {
  }

}
