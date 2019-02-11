import { Component, OnInit, Output, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {BizService} from "../../provider/biz.service";
import {SessionService} from "../../provider/session.service";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-mybusiness',
  templateUrl: './mybusiness.component.html',
  styleUrls: ['./mybusiness.component.scss']
})
export class MybusinessComponent implements OnInit {
 modalRef: BsModalRef;
  businesses = [];
  avbiz:  any;

  active_business: any;

  // business parameters
  business_name: string;
  region: string;
  country: string;
  date_of_reg: string;
  legal_status: string;
  sectors:  any;
  business_stage: string;
  start_of_operation: string;
  currentuser: any;
  bizinfo: any;
  packages:any;
  constructor( public modalService: BsModalService, public router: Router,public spinnerService: Ng4LoadingSpinnerService,  public bizy :BizService, public session : SessionService) {
      const data = this.session.getuser();
      this.currentuser = data;
      this.getbusinesses();
  }

  ngOnInit() {
    this.packages = this.bizy.imuka_programs();
  }

  add_business() {
    this.spinnerService.show();
      const biz = {
      business_name: this.business_name,
      region: this.region,
      country: this.country,
      date_of_reg: this.date_of_reg,
      legal_status : this.legal_status,
      sectors: JSON.stringify(this.sectors),
      business_stage: this.business_stage,
      start_of_operation: this.start_of_operation
    };
    biz['owner_id'] = this.currentuser.user_id;
    this.bizy.addbiz(biz).subscribe(data => {
      this.spinnerService.show();
        if(data.flag) {
        this.getbusinesses();
        }
    });
  }

  openModal(template: TemplateRef<any>, business) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'modal-lg' })
    );

    this.active_business = business;
  }

  getbusinesses() {
    this.bizy.getbusinesses_for_user(this.currentuser.user_id).subscribe(data=>{
        console.log(data);
        this.businesses = data;
    });
  }

  joinProgram(prog_type) {
    this.modalRef.hide();
    this.router.navigate(['join_imuka_program', this.active_business.business_id, prog_type])
  }
}

