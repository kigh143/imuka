import { Component, OnInit, TemplateRef  } from '@angular/core';
import {BizService} from "../../provider/biz.service";
import {SessionService} from "../../provider/session.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
  } from '@angular/forms';
  import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-investmentopp',
  templateUrl: './investmentopp.component.html',
  styleUrls: ['./investmentopp.component.scss']
})
export class InvestmentoppComponent implements OnInit {
  modalRef: BsModalRef;
  businesses = [1, 2];
  business_id:any;
  investmentopp:any;
  currentuser:any;
  request:any;
  active_business:any;
  modalbody = 'follow' ;
  current_biz_id:any;
  sector_info:any;
  business_info:any;
  constructor(public session : SessionService, public spinnerService: Ng4LoadingSpinnerService, private modalService: BsModalService, public formBuilder: FormBuilder, public business_service: BizService ) {
    this.request=this.formBuilder.group({
      financing_type:["", Validators.required],
      offer:["", Validators.required],
      comment:[""]
    });
    
   

     
   }

  ngOnInit() {
    let data = this.session.getuser();
    this.currentuser=data;
    this.get_investmentable_business(this.currentuser.user_id);
  }
  get_investmentable_business(user_id){
    this.business_service.get_investment_opp(user_id).subscribe(data=>{
      console.log(data);
      this.investmentopp=data;
      this.business_info = this.investmentopp.business_info
      this.business_id = this.investmentopp.business_id;
      this.sector_info = JSON.parse(this.business_info.sectors)
      console.log( this.sector_info);
  }
    );
}
openModal(template: TemplateRef<any>, mdbodal:string, business) {
  this.modalRef = this.modalService.show(template);
  this.active_business = business;

  if(mdbodal == 'follow'){
    this.modalbody = 'follow' ;
    
  }else if(mdbodal == 'view'){
    this.modalbody = 'view' ;
  }else{
    this.modalbody = 'invest' ;

  }
}
follow_business(){
  let investor= {};
  investor['user_id']=this.currentuser.user_id;
  investor['business_id']= this.active_business.business_id
  console.log(investor);
  this.business_service.follow_business(investor).subscribe(data=>{
    if(data.flag){
      this.get_investmentable_business(this.currentuser.user_id);
      this.modalRef.hide();
      //increase the count for follow
      //notification "you have followed "
    }
  })
  
}
makearequest(){
  this.spinnerService.show();
  let invest_request= this.request.value;
  invest_request['user_id']= this.currentuser.user_id;
  
  console.log(invest_request);
  this.business_service.sendinvestrequest(invest_request).subscribe(data=>{
    this.spinnerService.hide();
    if(data.flag){
      this.request.reset();
     
      //add more code
    }
  });

}



}
