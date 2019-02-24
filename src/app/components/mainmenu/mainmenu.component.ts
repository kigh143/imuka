import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from "../../provider/session.service";

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {
  user : any;

  constructor(public router : Router, public sessionService :SessionService ) { }

  ngOnInit() {
    this.user = this.sessionService.getuser();
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
