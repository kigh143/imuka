import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  imageUrl = 'assets/imuka.jpg';
  urlValue: string = "";

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public auth: AuthService,
    public spinnerService: Ng4LoadingSpinnerService,
    public session: SessionService,
    public activeRoute: ActivatedRoute,
  ) {
    this.myForm = this.formBuilder.group({
      email: [ '', Validators.compose([ Validators.pattern('^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$'),  Validators.required ])],
      password: [ '', Validators.compose([Validators.minLength(5), Validators.required]) ],
      phone: [ '', Validators.compose([Validators.minLength(10), Validators.required]) ],
      name: ['', Validators.compose([Validators.required])]
    });

    this.activeRoute.params.subscribe(params => {
      this.urlValue = params['type'];
      this.imageUrl = 'assets/' + params['type'] + '.jpg';
    });
   }

  signup() {
    this.spinnerService.show();
    const user = this.myForm.value;
    user.user_type = this.urlValue;
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
