import { Component, OnInit } from '@angular/core';
import { SessionapiService } from 'src/app/provider/sessionapi.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent implements OnInit {

  sessions = [];

  constructor(public api: SessionapiService) { }

  ngOnInit() {
    this.getSessions();
  }

  getSessions(){
    this.api.getsessions().subscribe( data =>{
      this.sessions = data;
    });
  }

}
