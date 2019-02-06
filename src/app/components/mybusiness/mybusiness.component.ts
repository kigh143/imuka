import { Component, OnInit, Output, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BizService} from "../../provider/biz.service";
import {SessionService} from "../../provider/session.service";
@Component({
  selector: 'app-mybusiness',
  templateUrl: './mybusiness.component.html',
  styleUrls: ['./mybusiness.component.scss']
})
export class MybusinessComponent implements OnInit {
 modalRef: BsModalRef;
  businesses = [];
  avbiz:any;

  //business parameters
  business_name: string;
  region: string;
  country: string;
  date_of_reg: string;
  legal_status : string;
  sectors: any;
  business_stage: string;
  start_of_operation: string;
  currentuser:any;
  business_id:any;
  bizinfo:any;
  constructor( public modalService: BsModalService, public router: Router,  public bizy :BizService, public session : SessionService) {
      let data = this.session.getuser();
      this.currentuser=data;
      this.getbusinesses();
   
}
  ngOnInit() {
  }
  
  add_business(){
      let biz = {
      business_name: this.business_name,
      region: this.region,
      country: this.country,
      date_of_reg: this.date_of_reg,
      legal_status : this.legal_status,
      sectors: JSON.stringify(this.sectors),
      business_stage: this.business_stage,
      start_of_operation: this.start_of_operation
    }

    biz['owner_id']=this.currentuser.user_id;
   
    this.bizy.addbiz(biz).subscribe(data=>{
        if(data.flag){
        this.getbusinesses();
 
        } else{
      
       
        }
    });   
   
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }


getbusinesses(){
   this.bizy.getbusinesses(this.currentuser.user_id).subscribe(data=>{
      console.log(data);
      this.businesses=data;
     
   });
}



  
  
}

