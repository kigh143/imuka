import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../provider/auth.service";
import {SessionService} from "../../provider/session.service";
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
  constructor(public formBuilder: FormBuilder, public router : Router, public auth: AuthService, public session: SessionService) { 
this.myForm = this.formBuilder.group({
      email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
     
    });
  }

  ngOnInit() {
  }

forgotpass(){
let user = this.myForm.value;
this.auth.forgotpass(user).subscribe(data=>{
  if(!data.flag){

  }else{
  this.router.navigate(['/login']);
  }
});
	
}
login(){
  this.router.navigate(['/login']);
}

}
