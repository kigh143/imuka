import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent  {
 verform: any;
  constructor( public formBuilder: FormBuilder, public router : Router) {

 this.verform = this.formBuilder.group({
      
      code: [ "", Validators.compose([Validators.minLength(5), Validators.required]) ]
    });
   }

  verify(){
  if (this.verform.valid) {
  this.router.navigate(['/dashboard'])
      console.log("Form Submitted!");
      this.verform.reset();
    }
    
     
  }

}
