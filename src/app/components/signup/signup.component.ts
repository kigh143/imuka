import { Component } from '@angular/core';
import { Router } from "@angular/router";

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  myForm: any;

  constructor(public formBuilder: FormBuilder, public router : Router) {
    this.myForm = this.formBuilder.group({
      email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
      password: [ "", Validators.compose([Validators.minLength(5), Validators.required]) ],
      phone: [ "", Validators.compose([Validators.minLength(10), Validators.required]) ]
    });
   }


  signup(){
        this.router.navigate(["/verify"]);
  }

}
