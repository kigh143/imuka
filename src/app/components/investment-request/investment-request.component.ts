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
  oneAtATime: boolean = true;
  constructor(public session : SessionService, public bizy : BizService, private modalService: BsModalService, public formBuilder: FormBuilder,  public spinnerService: Ng4LoadingSpinnerService, ) { 
    this.request=this.formBuilder.group({
      financing_type:["", Validators.required],
      offer:["", Validators.required],
      comments:[""]
    });
    
  }

  ngOnInit() {
    let data = this.session.getuser();
    this.currentuser=data;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  makearequest(){
    this.spinnerService.show();
    let invest_request= this.request.value;
    invest_request['user_id']= this.currentuser.user_id;
    this.bizy.sendinvestrequest(invest_request).subscribe(data=>{
      this.spinnerService.hide();
      if(data.flag){
        this.request.reset();
        //add more code
      }
    });
  
  }
}
