import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
FormGroup,
FormBuilder
FormControl,
Validators
} from "@angular/forms";
import {AuthService} from "../../provider/auth.service"
import {SessionService} from "../../provider/session.service"
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent  {
    verform: any;
    currentuser:any;
    constructor( public formBuilder: FormBuilder, public router : Router, public auth: AuthService, public session: SessionService) {
        this.verform = this.formBuilder.group({ code: [ "", Validators.compose([Validators.minLength(5), Validators.required]) ] });
        this.session.getuser().subscribe(data=>{
            this.currentuser=data;
        });
    }

    verify(){
      let user = this.verform.value;
      user['user_id']=this.currentuser.user_id;
      this.auth.verify(user,).subscribe( data => {
          if (data.flag){
              this.session.login(data.user);
              this.router.navigate(['/dashboard']);
          }
      });
    }
}
