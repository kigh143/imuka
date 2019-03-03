import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../provider/auth.service';
import {SessionService} from '../../provider/session.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  myForm: any;
  error = false;
  error_message: string;

  constructor(public formBuilder: FormBuilder, public router : Router, public auth: AuthService, 
    public spinnerService: Ng4LoadingSpinnerService,
    public session: SessionService) {
    this.myForm = this.formBuilder.group({
      email: [ '', Validators.compose([ Validators.pattern('^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$'),  Validators.required ])],
      password: [ '', Validators.compose([Validators.minLength(5), Validators.required]) ],
      phone: [ '', Validators.compose([Validators.minLength(10), Validators.required]) ],
      user_type: ['', Validators.compose([Validators.required])]
    });
   }

  signup() {
    this.spinnerService.show();
    const user = this.myForm.value;
    this.auth.signup(user).subscribe( data => {
      this.spinnerService.hide();
      if (data.flag) {
        this.session.login(data.user);
        this.router.navigate(['/verify']);
      } else {
        this.error = true;
        this.error_message = data.messsage;
      }
    });
  }

}
