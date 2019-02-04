import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../provider/session.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user : any;
  constructor(public sessionService : SessionService ) { }

  name: string;
  email: string;
  phone: string;
  address : string;
  dob: string;
  mstatus: string;
  gender: string;
  education: string;
  relevant_exp: string;
  relevant_skills: string;
  expertise: string;

  ngOnInit() {
    this.sessionService.getuser().subscribe( data  => {
      this.user = data;
    })
  }

  save(value){
    if( value==="name"){

    }else if( value==="contact"){
      
    }else if( value==="personnal"){
      
    }else if( value==="education"){
      
    }else if( value==="experience"){
      
    }
  }

}
