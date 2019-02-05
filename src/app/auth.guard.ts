import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService} from "./provider/session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( public sessionService : SessionService, public router: Router){}

  canActivate(): boolean {
    if(this.sessionService.isAuthenticated()){
      return true;
    }else{
      this.router.navigate(['/welcome']);
      return false;
    }
  }
}
