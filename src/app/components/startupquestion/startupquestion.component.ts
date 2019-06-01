import { Component, OnInit } from '@angular/core';
import { SessionapiService } from 'src/app/provider/sessionapi.service';
import { SessionService } from 'src/app/provider/session.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-startupquestion',
  templateUrl: './startupquestion.component.html',
  styleUrls: ['./startupquestion.component.scss']
})
export class StartupquestionComponent implements OnInit {
  general_info = true;
  product_info = false;
  business_info = false;
  doc_info1= false;
  product_info1 =false;
  doc_info = false;
  financial_info = false;
  successful = false;
  generalinfoform;
  generalinfo;
  business_name;
  region;
  country;
  date_of_reg;
  legal_status ;
  sectors;
  business_stage;
  start_of_operation;
  start_contract ;
  end_contract;
  financial_info1= false;
  type;
  prdtname;
  price;
  description;
  revenue;
  ihvedocs=[];
  constructor( public session:SessionService, public formbuild: FormBuilder) { 
  

}
  ngOnInit() {
  }

  addinfo(){
    const businessinfo = {
      business_name: this.business_name,
      region: this.region,
      country: this.country,
      date_of_reg: this.date_of_reg,
      legal_status : this.legal_status,
      sectors: JSON.stringify(this.sectors),
      business_stage: this.business_stage,
      start_of_operation: this.start_of_operation,
      start_contract : this.start_contract,
      end_contract : this.end_contract,
      type : this.type
    }
    this.general_info = false;
    this.product_info = true;
    console.log(businessinfo);
  this.session.addbusinessinfo('generalinfo', businessinfo)
  }
  addpdt(){
    const productinfo = {
      prdtname : this.prdtname,
      price : this.price,
      description : this.description
    }
    this.general_info = false;
    this.product_info = false;
    this.product_info1 = true;
    this.doc_info = true;
    console.log(productinfo);
    this.session.addbusinessinfo('productinfo', productinfo);
  
  }
  adddocinfo(){
    this.general_info = false;
    this.product_info = false;
     this.doc_info1 = true;
    this.business_info= false;
    this.doc_info = false;
    this.financial_info = true;
    this.session.addbusinessinfo('documents', this.ihvedocs);
    
  }
  addfinancial(){
   let revenueamt = this.revenue
    this.general_info = false;
    this.product_info = false;
    this.financial_info1 = true;
    this.business_info= false;
    this.financial_info = false;
    console.log(revenueamt)
    this.successful = true;
    this.session.addbusinessinfo('revenue', revenueamt);
  }
  getdoc(e){
    
    if(e.target.checked ===true){
      this.ihvedocs.push(e.target.value)
      console.log( this.ihvedocs)
     
    }

   
    //
   }
   removeunchecked(){
     
   }
}
