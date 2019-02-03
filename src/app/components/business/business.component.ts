import { Component, OnInit , Output, TemplateRef ,  OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import {
FormGroup,
FormBuilder,
FormControl,
Validators
} from "@angular/forms";
import { TabsModule } from 'ngx-bootstrap/tabs';
import {BizService} from "../../provider/biz.service";
import {SessionService} from "../../provider/session.service";
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
selector: 'app-business',
templateUrl: './business.component.html',
styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit,  OnDestroy {
@ViewChild('staticTabs') staticTabs: TabsetComponent;
  modalRef: BsModalRef;
  headElements = ['Id', 'Item', 'unit price', 'Unit', 'Price', 'Action'];
  bsValue: Date = new Date(2017, 7);
  minMode: BsDatepickerViewMode = 'month';

  bsConfig: Partial<BsDatepickerConfig>;
  sub:any;
  business_id:any;
  business_data:any;
  bizteam:any;
  bizdoc:any;
  bizproduct:any;
  bizfinancial:any;
  biznes

  constructor(
    public formBuilder: FormBuilder, 
    public route: ActivatedRoute, 
    public router : Router, 
    public modalService: BsModalService,  
    public businessServices :BizService, 
    public session : SessionService) {
      this.bizteam=this.formBuilder.group({
          teamname:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          position:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          phonenumber: [ "", Validators.compose([ Validators.minLength(10),  Validators.required ])],
          email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
          address:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          image:[]
      });

      this.bizdoc=this.formBuilder.group({
          doctype:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          docupload:[ "",Validators.required ],
      });

      this.bizproduct=this.formBuilder.group({
          pdtname:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          descript:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          pdtimage:[]
      });

      this.bizfinancial=this.formBuilder.group({
          start_period:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          descript:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          end_period:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          revenue:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          cost:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          grossprofit:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          expenditure:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          tax:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          net_profit:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          ebitda:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          ebit:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          depriciation:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          land:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          machinery:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          furniture:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          stock:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          debtors:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          shareholder_equity:[ "", Validators.compose([ Validators.minLength(2),  Validators.required ])],
          cash_bank:[ "", Validators.compose([ Validators.minLength(4),  Validators.required ])],
          finfile:[]
      });
  }

  ngOnInit() {
      this.bsConfig = Object.assign({}, { minMode : this.minMode  });
      this.sub = this.route.params.subscribe(params => {
          this.business_id = +params['id'];
          this.getbusiness(params['id']);
      });
  }

  selectTab(tabId: number) {
      this.staticTabs.tabs[tabId].active = true;
  }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  } 


  getbusiness(biz_id){
      this.businessServices.fetch_abusiness(biz_id).subscribe(data=>{
          if(data.flag){
          this.business_data=data;
          this.biznes  = data["business_info"];
          console.log(this.biznes);
          }
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  addpdt(){
      let products=this.bizproduct.value;
      this.businessServices.addproduct(products).subscribe(data=>{
          if(data.flag){
              this.bizproduct.reset();
          }
      });
  }

  adddoc(){
      let document=this.bizdoc.value;
      this.businessServices.adddocument(document).subscribe(data=>{
          if(data.flag){
              this.bizdoc.reset();
          }
      });
  }

  addfinancial(){
      let document=this.bizfinancial.value;
      this.businessServices.addfinancial(document).subscribe(data=>{
          if(data.flag){
              this.bizfinancial.reset();
          }
      })
  }

  addteam(){
      let team=this.bizteam.value;
      this.businessServices.addteam(team).subscribe(data=>{
          if(data.flag){
              this.bizteam.reset();
          }
      })
  }

}
