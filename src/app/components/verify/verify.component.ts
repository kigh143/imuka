import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
FormGroup,
FormBuilder,
FormControl,
Validators
} from '@angular/forms';
import {AuthService} from '../../provider/auth.service'
import {SessionService} from '../../provider/session.service'
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent  {
    verform: any;
    currentuser: any;
    error: Boolean;
    error_message: String;
    constructor( public formBuilder: FormBuilder, public router : Router, public auth: AuthService, public session: SessionService) {
        this.verform = this.formBuilder.group({
             code: [ '', Validators.compose([Validators.maxLength(4), Validators.maxLength(4), Validators.required]) ] 
        });
        const data = this.session.getuser();
        this.currentuser = data;
    }

    verify() {
      const user = this.verform.value;
      user['user_id'] = this.currentuser.user_id;
      this.auth.verify(user).subscribe( data => {
          if (data.flag) {
              this.session.login(data.user);
              this.router.navigate(['questions']);
          } else {
            this.error = true;
            this.error_message = data.message;
          }
      });
    }

    resend_code() {

    }
}
