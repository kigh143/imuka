import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {SessionService} from '../../provider/session.service';
import {BizService} from '../../provider/biz.service';	
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
	oneAtATime: boolean = true;
	makerequest: any;
	user: any;
	requests: any;
	current: number = 0;
	items: Array<any>;
	activerequest:any
	modalRef: BsModalRef;
	current_user:any;
  constructor(private modalService: BsModalService,
		public formBuilder: FormBuilder,
		public router: Router,
		public session: SessionService, 
		public businessServices: BizService) {
		this.makerequest=this.formBuilder.group({
			request_type:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
			title:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
			details:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])]
		});
	 }


	ngOnInit() {
		this.user = this.session.getuser();
		console.log(this.user);
		this.receiverequest(this.user.user_id);
		

	
  }
  openModal(template: TemplateRef<any>, request) {
	this.modalRef = this.modalService.show(template);
	this.activerequest = request;
	this.current_user = this.user;
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
