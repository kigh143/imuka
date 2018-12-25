import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent  {

  constructor( public router: Router) { }

  verify(){
      this.router.navigate(['/dashboard'])
  }

}
