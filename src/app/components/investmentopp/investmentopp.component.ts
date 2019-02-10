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

  constructor(public session : SessionService, public bizy : BizService, private modalService: BsModalService, public formBuilder: FormBuilder ) {
    let data = this.session.getuser();
      this.currentuser=data;
      this.get_investmentable_business();

     
   }

  ngOnInit() {
  }
  get_investmentable_business(){
    this.bizy.get_investmentable_business(this.currentuser.user_id).subscribe(data=>{
      console.log(data);
      this.investmentopp=data;
  }
    );
}


}
