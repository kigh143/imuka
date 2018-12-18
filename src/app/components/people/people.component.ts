import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = [1, 3,3,4,6,7,8,9,7,8,6,7,8,9,7,5,9,7];
  constructor( public router: Router) { }

  ngOnInit() {
  }

  go_to_profile(user){
      this.router.navigate(['user', {user_id:user}])
  }

}
