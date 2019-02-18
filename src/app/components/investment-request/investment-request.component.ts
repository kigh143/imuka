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
   
    
  }

  ngOnInit() {
    let data = this.session.getuser();
    this.currentuser=data;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
 
}
