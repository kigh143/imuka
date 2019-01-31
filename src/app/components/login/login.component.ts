import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import {AuthService} from "../../provider/auth.service"
import {SessionService} from "../../provider/session.service"
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {

  loginForm: any; 

  constructor(private router: Router, public formBuilder: FormBuilder, public auth: AuthService, public session: SessionService) {
    this.loginForm = this.formBuilder.group({
      email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
      password: [ "", Validators.compose([Validators.minLength(5), Validators.required]) ]
    });
  }

  

   login() {
    let user = this.loginForm.value;
   
   console.log(user);
    this.auth.login(user).subscribe( data=>{
      console.log(data)
       if (!data.flag){

       } else{
       this.session.login(data.user);
       this.router.navigate(['/dashboard']);
       }
    });

  
  }
}
