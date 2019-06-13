import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService} from './provider/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  KEY = 'user_object';
  KEY2 = 'isdone';
  constructor( public sessionService: SessionService, public router: Router) { }
     isdone = localStorage.getItem(this.KEY2);
  canActivate(): boolean {
      if (localStorage.getItem(this.KEY) != null ) {
          
            return true;
          }
          
        
        
        
      else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
