import { Component, OnInit } from '@angular/core';
import { SessionapiService } from 'src/app/provider/sessionapi.service';
import { SessionService } from 'src/app/provider/session.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BizService } from 'src/app/provider/biz.service';
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
  legal_entity ;
  sectors;
  business_stage;
  start_of_operation;
  start_contract ;
  end_contract;
  financial_info1= false;
  type;
  prdtname;
  price;
  businessdocs;
  businessrevenue;
  productinformation;
  
  description;
  revenue;
  ihvedocs=[];
  user;
  generalinformation;
  constructor( public session:SessionService, public formbuild: FormBuilder, public router: Router, public businessservice: BizService) { 
  

}
  ngOnInit() {
    const data = this.session.getuser();
    this.user = data;
    localStorage.getItem('isdone')
  }

  addinfo(){
    const businessinfo = {
      business_name: this.business_name,
      region: this.region,
      country: this.country,
      date_of_reg: this.date_of_reg,
      legal_entity : this.legal_entity,
      sectors: JSON.stringify(this.sectors),
      business_stage: this.business_stage,
      start_of_operation: this.start_of_operation,
      start_contract : this.start_contract,
      end_contract : this.end_contract,
      prop_type : "business"
    }
    this.general_info = false;
    this.product_info = true;
    console.log(businessinfo);
    this.session.addbusinessinfo('generalinfo', businessinfo)
    localStorage.setItem('isdone', 'false')
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
    localStorage.setItem('isdone', 'false')
  }
  adddocinfo(){
    this.general_info = false;
    this.product_info = false;
     this.doc_info1 = true;
    this.business_info= false;
    this.doc_info = false;
    this.financial_info = true;
    this.session.addbusinessinfo('documents', this.ihvedocs);
    localStorage.setItem('isdone', 'false')
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
    this.saveinfo();
  }
  getdoc(e){
    
    if(e.target.checked ===true){
      this.ihvedocs.push(e.target.value)
      console.log( this.ihvedocs)
     
    }

   
    //
   }
   previous(currentstate){
    this.fetchbusiness();
      if(currentstate == 'product_info'){
        this.general_info = true;
        this.product_info = false;
        this.business_info = false;
      }
      else if(currentstate == 'business_info'){
        this.product_info = true;
        this.general_info = false;
        this.business_info = false;
      }
      else if(currentstate == 'financial_info'){
        this.business_info = true;
        this.general_info = false;
        this.product_info = false;
      }
   }
   fetchbusiness(){
    this.generalinformation = localStorage.getItem('generalinfo')
    console.log(this.generalinformation);
    this.productinformation = localStorage.getItem('productinfo')
    this.businessdocs = localStorage.getItem('documents')
    this.businessrevenue = localStorage.getItem('revenue')   
   }
   gotodashboard(){
     
     this.router.navigate(['/']);
   }
   saveinfo(){
     let allbusinessinfo ={
       
      generalinformation: localStorage.getItem('generalinfo'),
       productinformation: localStorage.getItem('productinfo'),
       businessdocs: localStorage.getItem('documents'),
       businessrevenue : localStorage.getItem('revenue'),
     }
     localStorage.setItem('isdone', 'true');
    //  localStorage.removeItem('currentGame');
     if(allbusinessinfo !=null){
       //send to the backend
       this.businessservice.capturebusinessinfo(this.user.user_id, JSON.stringify(allbusinessinfo)).subscribe(data =>{
        if(data.flag){
          
          console.log("submitted")
         
        }
       });
      

     }
     else{
       this.gotodashboard()
     }
   }
}
