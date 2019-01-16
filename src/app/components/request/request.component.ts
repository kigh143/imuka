import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
	requests=[1, 2, 3, 4, 5];
	oneAtATime: boolean = true;
	makerequest:any;

	constructor(public formBuilder: FormBuilder, public router : Router) {
		this.makerequest=this.formBuilder.group({
			requesttype:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
			requesttitle:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
			requestdetail:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])]
		});
	 }

	ngOnInit() {
  }

	sendrequest(){
	if(this.makerequest.valid){
		this.router.navigate(['/dashboard'])
	    console.log("Form Submitted!");
	    this.makerequest.reset();
	}
	}

}
