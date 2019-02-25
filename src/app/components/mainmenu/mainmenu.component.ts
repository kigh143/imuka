import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from "../../provider/session.service";
import { BizService } from 'src/app/provider/biz.service';


@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {
  user : any;
  count: any;
  event_counter :any;
  opps_count : any;
  business_count : any;


  constructor(public router : Router, public sessionService :SessionService, public businessService:BizService ) { }

  ngOnInit() {
    this.user = this.sessionService.getuser();
     this.getcount();
  }
  getcount(){
    this.businessService.getcount(this.user.user_id).subscribe(data => {
       this.count = data;
       this.event_counter = data.events;
       this.opps_count = data.opps;
       this.business_count = data.businesses;
       console.log(this.count);

    });
  }
 
  logout(){
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }

  go_to_profile(){
    this.router.navigate(['profile']);
  }
  activateClass(subModule){
    subModule.active = !subModule.active;    
  }

}
