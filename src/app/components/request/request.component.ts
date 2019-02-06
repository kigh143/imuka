import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import {SessionService} from "../../provider/session.service";
import {BizService} from "../../provider/biz.service";	
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
	oneAtATime: boolean = true;
	makerequest:any;
	user:any;
	requests:any;

	constructor(public formBuilder: FormBuilder, public router : Router, public session:SessionService, public businessServices :BizService) {
		this.makerequest=this.formBuilder.group({
			request_type:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
			title:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
			details:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])]
		});
	 }


	ngOnInit() {
		this.user = this.session.getuser();
		console.log(this.user);
		this.receiverequest(this.user.user_id);
	
  }

	sendrequest(){
		let request=this.makerequest.value;
		request['user_id']=this.user.user_id;
		console.log(request);
		this.businessServices.sendrequest(request).subscribe(data=>{
       if(data.flag){
				 this.makerequest.reset();
				 this.receiverequest(this.user.user_id);

			 }                                                       
		});
	}
	receiverequest(user_id){
	 this.businessServices.fetchrequest(user_id).subscribe(data=>{
			this.requests=data;
			console.log(this.requests)
	});
	}
	

}
