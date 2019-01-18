import { Component, OnInit, ViewChild } from '@angular/core';

import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  oneAtATime: boolean = true;
  nots:any;
  notifications=[{
	name:"on event posted",
	isclicked:true
  },
{
	name:"on opportunity posted",
	isclicked:true
  },
  {
	name:"investment request",
	isclicked:true  },
  {
	name:"followed update",
	isclicked:true
  },
  {
	name:"connection request",
	isclicked:true
  }
  ]
			

  constructor() { 
   this.nots=this.notifications;
  }

  ngOnInit() {
  }

  turnn(i){
  for(let j=0; j<this.notifications.length; j++){
   if(i==j){
    this.notifications[j].isclicked= true; 
 

   }
   else{
         this.notifications[j].isclicked= false; 
   }
  }
  	
  }

}
