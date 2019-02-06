import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService} from "./provider/session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  KEY = "user_object";

  constructor( public sessionService : SessionService, public router: Router){
    console.log(localStorage.getItem(this.KEY));
  }

  canActivate(): boolean {
      if(localStorage.getItem(this.KEY) != null ){
        return true;
      }else{
        this.router.navigate(['/welcome']);
        return false;
      } 
  }
}
