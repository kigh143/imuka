import { Component, OnInit } from '@angular/core';
import { SessionapiService } from 'src/app/provider/sessionapi.service';
import { SessionService } from 'src/app/provider/session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  sessions = [];
  mySessions = []
  user: any;
  all = false;
  my = true;


  constructor(public api: SessionapiService, public userSession: SessionService) { }

  ngOnInit() {
    this.getSessions();
    this.getUser();
  }

  getUser() {
    this.user = this.userSession.getuser();
    this.getMySessions(this.user.user_id)
  }

  getSessions(){
    this.api.getsessions().subscribe( data =>{
      this.sessions = data;
    });
  }

  getMySessions(user_id){
    this.api.getuserattendance(user_id).subscribe( data => {
        this.mySessions = data;
    });
  }

  applyForSession(session, i) {
      const application = {
          session_id:session.session_id,
          user_id:this.user.user_id,
          paid_for:'yes'
      };
      this.api.attendsession(application).subscribe( data => {
          console.log(data);
      }, err => {
        console.log(err);
      });

  }

  changePages(page) {
    if ( page === 'my') {
      this.all = false;
      this.my = true;
    } else {
      this.all = true;
      this.my = false;
    }
  }
}

