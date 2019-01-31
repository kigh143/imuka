import { Component, OnInit, Output, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-mybusiness',
  templateUrl: './mybusiness.component.html',
  styleUrls: ['./mybusiness.component.scss']
})
export class MybusinessComponent implements OnInit {
 modalRef: BsModalRef;
  businesses = [];

  //business parameters
  business_name: string;
  region: string;
  country: string;
  date_of_reg: string;
  legal_status : string;
  sectors: any;
  business_stage: string;
  start_of_operation: string;

  constructor( public modalService: BsModalService) {

  }

  ngOnInit() {
  }
  

  add_business(){
    alert("yes");
    let biz = {
      business_name: this.business_name,
      region: this.region,
      country: this.country,
      date_of_reg: this.date_of_reg,
      legal_status : this.legal_status,
      sectors: this.sectors,
      business_stage: this.business_stage,
      start_of_operation: this.start_of_operation
    }
    this.businesses.push(biz);
    console.log(this.businesses);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }
}

