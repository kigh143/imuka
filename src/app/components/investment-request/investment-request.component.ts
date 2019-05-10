import { Component, OnInit, TemplateRef  } from '@angular/core';
import {BizService} from "../../provider/biz.service";
import {SessionService} from "../../provider/session.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
  } from '@angular/forms';
@Component({
  selector: 'app-investment-request',
  templateUrl: './investment-request.component.html',
  styleUrls: ['./investment-request.component.scss']
})
export class InvestmentRequestComponent implements OnInit {

  modalRef: BsModalRef;
  businesses = [1, 2];
  investmentopp:any;
  currentuser:any;
  request:any;
  accepted:any;
  pending:any;
  oneAtATime: boolean = true;
  constructor(public session : SessionService,public business_service: BizService, private modalService: BsModalService, public formBuilder: FormBuilder,  public spinnerService: Ng4LoadingSpinnerService, ) { 
   
    
  }

  ngOnInit() {
    let data = this.session.getuser();
    this.currentuser=data;
    this.get_user_investment(this.currentuser.user_id);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  get_user_investment(user_id){
    this.business_service.get_user_investement(user_id).subscribe(data=>{
       this.accepted=data.accepted;
       this.pending= data.pending;
       console.log(data)
    })
  
  }
  cancelinvestment(investmentrequest_id){
   this.business_service.cancelinvestment(investmentrequest_id).subscribe(data=>{
    this.get_user_investment(this.currentuser.user_id);
   })
  }
 
}
