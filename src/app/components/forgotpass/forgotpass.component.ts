import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../provider/auth.service";
import {SessionService} from "../../provider/session.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
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
  constructor(public formBuilder: FormBuilder, public router : Router, public auth: AuthService, public session: SessionService, public spinnerService: Ng4LoadingSpinnerService) { 
this.myForm = this.formBuilder.group({
      email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
     
    });
  }

  ngOnInit() {
  }

forgotpass(){
  this.spinnerService.show();
let user = this.myForm.value;
this.auth.forgotpass(user).subscribe(data=>{
  this.spinnerService.hide();
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
