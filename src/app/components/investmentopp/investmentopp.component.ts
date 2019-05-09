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
  investment_need:any;
  constructor(public session : SessionService,public business:BizService, public spinnerService: Ng4LoadingSpinnerService, private modalService: BsModalService, public formBuilder: FormBuilder, public business_service: BizService ) {
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
        this.investmentopp=data;
        this.investment_need = JSON.parse(this.investmentopp.investment_need.investimentNeed)
        console.log(this.investment_need)
    });
  }

  openModal(template: TemplateRef<any>, mdbodal:string, business) {
    this.modalRef = this.modalService.show(template);
    this.active_business = business;
    console.log(this.active_business)
    if(mdbodal == 'follow'){
      this.modalbody = 'follow';
    }else {
      this.modalbody = 'invest' ;
    }
  }

  follow_business(){
    let investor= {};
    investor['user_id']=this.currentuser.user_id;
    investor['business_id']= this.active_business.business_id
    this.business_service.follow_business(investor).subscribe(data=>{
      if(data.flag){
        this.get_investmentable_business(this.currentuser.user_id);
        this.modalRef.hide();
      }
    });
  }

  unfollow_business(followid){
       this.business_service.unfollow(followid).subscribe(data=>{
         this.get_investmentable_business(this.currentuser.user_id);
       })
  }
  makearequest(){
    this.spinnerService.show();
    let invest_request= this.request.value;
    invest_request['user_id']= this.currentuser.user_id;
    invest_request['business_id']= this.active_business.business_id
    this.business_service.sendinvestrequest(invest_request).subscribe(data=>{
      this.spinnerService.hide();
      if(data.flag){
        this.request.reset();
        this.modalRef.hide();
      }
    });
    
  }


}
