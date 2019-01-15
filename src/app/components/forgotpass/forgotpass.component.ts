import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit {
myForm: any;
  constructor(public formBuilder: FormBuilder, public router : Router) { 
this.myForm = this.formBuilder.group({
      email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
     
    });
  }

  ngOnInit() {
  }

forgotpass(){
	if (this.myForm.valid) {
  this.router.navigate(["/login"]);
    
      this.myForm.reset();
    }
}

}
