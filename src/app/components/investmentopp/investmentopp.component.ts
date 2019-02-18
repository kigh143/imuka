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
  investmentopp:any;
  currentuser:any;
  request:any;
  modalbody = 'follow' ;
  constructor(public session : SessionService, public spinnerService: Ng4LoadingSpinnerService, private modalService: BsModalService, public formBuilder: FormBuilder, public business_service: BizService ) {
    this.request=this.formBuilder.group({
      financing_type:["", Validators.required],
      offer:["", Validators.required],
      comments:[""]
    });
    
   

     
   }

  ngOnInit() {
    let data = this.session.getuser();
    this.currentuser=data;
    this.get_investmentable_business();
  }
  get_investmentable_business(){
    this.business_service.getallbusinesses().subscribe(data=>{
      console.log(data);
      this.investmentopp=data;
      console.log(this.investmentopp)
  }
    );
}
openModal(template: TemplateRef<any>, mdbodal:string) {
  this.modalRef = this.modalService.show(template);
  if(mdbodal == 'follow'){
    this.modalbody = 'follow' ;
  }else if(mdbodal == 'view'){
    this.modalbody = 'view' ;
  }else{
    this.modalbody = 'invest' ;

  }
}
follow_business(){
  let investor=this.currentuser['user_id'];
  investor['business_id']= this.investmentopp.business_id;
  this.business_service.follow_business(investor).subscribe(data=>{
    if(data.flag){
      this.get_investmentable_business()
      //increase the count for follow
      //notification "you have followed "
    }
  })
  
}
makearequest(){
  this.spinnerService.show();
  let invest_request= this.request.value;
  invest_request['user_id']= this.currentuser.user_id;
  this.business_service.sendinvestrequest(invest_request).subscribe(data=>{
    this.spinnerService.hide();
    if(data.flag){
      this.request.reset();
      //add more code
    }
  });

}


}
