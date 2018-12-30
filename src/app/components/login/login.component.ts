import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {

  loginForm: any; 

  constructor(private _router: Router, public formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
      password: [ "", Validators.compose([Validators.minLength(5), Validators.required]) ]
    });
  }

  login() {
    // this._router.navigate(["/dashboard"]);
  }
}
