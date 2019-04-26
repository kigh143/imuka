import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared-event',
  templateUrl: './shared-event.component.html',
  styleUrls: ['./shared-event.component.css']
})
export class SharedEventComponent implements OnInit {
  event;
  event_id;
  login:boolean = true;
  signup: boolean = false;
  constructor(
    public eventsapi : EventsService,
   public router :Router,
   public route : ActivatedRoute

  ) { 
    this.route.params.subscribe(params=>{
      this.event_id = params['id'];
    })
  }

  ngOnInit() {
    this.getevent(this.event_id);
  }
  getevent(event_id){
   this.eventsapi.getanevent(event_id).subscribe(data=>{
     this.event = data;
     console.log(this.event);
   })
  }
  login_ent(){
    this.login = false;
    this.signup = true;
    console.log("changed")
  }
  sign_ent(){
    this.login = true;
    this.signup = false;
    console.log("changed")
  }
}
