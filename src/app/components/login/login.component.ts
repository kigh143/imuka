import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import {AuthService} from "../../provider/auth.service"
import {SessionService} from "../../provider/session.service"
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  loginForm: any; 
  private readonly notifier: NotifierService;
  constructor(private router: Router, public formBuilder: FormBuilder, public auth: AuthService,
    public spinnerService: Ng4LoadingSpinnerService,  public notifierService: NotifierService,
    public session: SessionService) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),Validators.required])],
      password: ["", Validators.compose([Validators.minLength(5), Validators.required])]
    });
    this.notifier = notifierService;
    this.notifier.notify( 'success', 'You are awesome! I mean it!', 'THAT_NOTIFICATION_ID' );
  }

  login() {
    this.spinnerService.show();
    let user = this.loginForm.value;
    this.auth.login(user).subscribe( data=>{ 
      this.spinnerService.hide();
       if (data.flag){
          this.session.login(data.user);
          this.router.navigate(['/']);
       }else{
         console.log(data.message)
       }
    });
  }

  
}
