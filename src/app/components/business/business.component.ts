import { Component, OnInit , Output, TemplateRef ,  OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {
FormGroup,
FormBuilder,
FormControl,
Validators
} from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {BizService} from '../../provider/biz.service';
import {SessionService} from '../../provider/session.service';
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
  complete: any;
  sub: any;
  business_id: any;
  business_data: any;
  bizteam: any;
  bizdoc: any;
  bizproduct: any;
  bizfinancial: any;
  biznes: any;
  dailyupdates: any;

  milestones = [
    {
      name: 'Needs assessment',
      complete: 'true'
    },
    {
      name: 'Financial palnning and management',
      complete: true
    },
    {
      name: 'Business model innovation',
      complete: false
    },
    {
      name: 'unlimitted personalsized support',
      complete: true
    },
    {
      name: 'Success fee',
      complete: true
    }
  ];

  constructor(
    public formBuilder: FormBuilder, 
    public route: ActivatedRoute, 
    public router : Router, 
    public modalService: BsModalService,  
    public businessServices :BizService, 
    public session : SessionService,
    public spinnerService: Ng4LoadingSpinnerService) {
      this.bizteam=this.formBuilder.group({
          teamname:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          position:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          phonenumber: [ '', Validators.compose([ Validators.minLength(10),  Validators.required ])],
          email: [ '', Validators.compose([ Validators.pattern('^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$'),  Validators.required ])],
          address:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          image:[]
      });

      this.bizdoc=this.formBuilder.group({
          doc_type:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          name:[ '',Validators.required ],
      });

      this.bizproduct=this.formBuilder.group({
          name:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          price:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          description:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])]
        
      });

      this.bizfinancial=this.formBuilder.group({
          from_date:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          end_date:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          revenue:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          cogs:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          grossprofit:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          total_expenditure:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          tax:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          net_profit:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          ebitda:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          ebit:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          depriciation:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          land:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          machinery:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          furniture:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          stock:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          debtors:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          shareholder_equity:[ '', Validators.compose([ Validators.minLength(2),  Validators.required ])],
          cash_bank:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
          
      });
      this.dailyupdates=this.formBuilder.group({
        update_month:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    number_people:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    female_people:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    sales_revenue:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    paying_customer:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    meetings:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    market_expenses:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    Commitment_experts:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    Networking_opps:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    expert_grade:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    development_grade:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    challenges:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
    expectations:[ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
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
         
          this.business_data=data;
          this.biznes  = data['business_info'];
          console.log(this.biznes);
          console.log(this.business_data);
          
      });
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  addpdt(){
    
    this.spinnerService.show();
    let products=this.bizproduct.value;
    products['business_id']=this.business_id;
    this.businessServices.addproduct(products).subscribe(data=>{
      
    this.spinnerService.hide();
      if(data.flag){
       this.bizproduct.reset();
       this.getbusiness(this.business_id);
  }});
}

  adddoc(){
    this.spinnerService.show();
    let document=this.bizdoc.value;
    document['business_id']=this.business_id;
    this.businessServices.adddocument(document).subscribe(data=>{ 
    this.spinnerService.hide();
      if(data.flag){
        this.bizdoc.reset();
        this.getbusiness(this.business_id);
          }
      });
  }

  addfinancial(){
    this.spinnerService.show();
    let financial=this.bizfinancial.value;
    financial['business_id']=this.business_id;
        this.businessServices.addfinancial(financial).subscribe(data=>{
          this.spinnerService.hide();
          if(data.flag){
            this.bizfinancial.reset();
             this.getbusiness(this.business_id);
          }
      })
  }

  addteam(){
    this.spinnerService.show();
      let team=this.bizteam.value;
      this.businessServices.addteam(team).subscribe(data=>{
        this.spinnerService.hide();
          if(data.flag){
              this.bizteam.reset();
          }
      });
  }
  add_dailyupdate(){
    this.spinnerService.show();
    let dailyupdates = this.dailyupdates.value;
    dailyupdates['business_id']=this.business_id;
    this.businessServices.adddailyupdates(dailyupdates).subscribe(data=>{
      this.spinnerService.hide();
     if(data.flag){
     this.getbusiness(this.business_id);
  
     }                                                                                                                                                                                                                            
  
    });
  }
 updatebusiness(){
  this.spinnerService.show();
   let business_data = this.business_data;
   this.businessServices.updatebusiness(business_data).subscribe(data=>{
    this.spinnerService.hide();
     if(data.flag){
      this.getbusiness(this.business_id);
     }
   })
 }


}
