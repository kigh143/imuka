import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../provider/auth.service";
import { SessionService } from "../../provider/session.service";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people:any;
  constructor( 
    public router: Router, 
    public authService:AuthService,
    public sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.getuser().subscribe( user_info => {
      this.fetch_users(user_info.user_id);
    }, error => {
      console.log(error)
    })
  }

  fetch_users(user_id){
      this.authService.get_all_users(user_id).subscribe ( data  => {
          this.people = data;
      }, error => {
        console.log(error)
      })
  }

}
