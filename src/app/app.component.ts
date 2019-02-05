import { Component } from '@angular/core';
import { SessionService } from "../app/provider/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( public sessionService:SessionService ){
    this.sessionService.checkUser();
  }
  onActivate(){
    window.scroll(0,0);
  }
}
