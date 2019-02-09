import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../provider/auth.service';
import { SessionService } from '../../provider/session.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people: any;
  user: any;
  friends: any;
  connection_requests: any;
  constructor(
    public router: Router,
    public authService: AuthService,
    public sessionService: SessionService) { }

  ngOnInit() {
    this.user = this.sessionService.getuser();
    this.fetch_users(this.user['user_id']);
    this.get_friends();
    this.get_new_connection_request();
  }

  fetch_users(user_id) {
    this.authService.get_all_users(user_id).subscribe ( data  => {
      this.people = data;
    }, error => {
      console.log(error);
    });
  }

  connect(user) {
      this.authService.request_connection(this.user.user_id, user.user_id).subscribe( data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  accept(user){
    this.authService.accept_connection_request(user.connection_id).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  get_friends() {
    this.authService.get_friends(this.user.user_id).subscribe( result => {
        this.friends = result;
    }, error => {
      console.log(error);
    });
  }

  get_new_connection_request() {
    this.authService.get_connection_requests(this.user.user_id).subscribe( data  => {
        this.connection_requests = data;
    }, error => {
      console.log(error);
    });
  }

}
