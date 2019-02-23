import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ActivatedRoute, Router } from '@angular/router';
import {BizService} from '../../provider/biz.service';


@Component({
selector: 'app-e-invoice',
templateUrl: './e-invoice.component.html',
styleUrls: ['./e-invoice.component.scss']
})
export class EInvoiceComponent implements OnInit {

invoices: any;
business: any;
payables:any;
receiveables:any;
paymentrequests:any;
receiveable_clicked=true;
payable_clicked=false;
paymentrequest_clicked=false;
modalRef: BsModalRef;
constructor(private modalService: BsModalService, 
  public route: ActivatedRoute, public router : Router, public businessService: BizService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     
      this.get_invoices(params['id']);
      this.getbusiness(params['id']);  
     
    });
    this.invoices=this.receiveables
  }

  get_invoices( business_id ){
      this.businessService.get_invoices(business_id).subscribe( data => {
          this.invoices = data.receivables;
          this.payables=data.payables;
          this.receiveables=data.receivables;
          this.paymentrequests=data.payment_requests
          console.log(this.paymentrequests);
      }, error =>{
        console.log(error);
      })
  }

  getbusiness( id ){
      this.businessService.fetch_abusiness(id).subscribe( data => {
        this.business = data["business_info"];
      }, error =>{
        console.log(error);
      });
  }

 requestpayment(i, invoice){
   this.businessService.requestpayment(invoice.invoice_id).subscribe(data=>{
    this.get_invoices(invoice.prepared_by);
   });

 }
 fetchreceivables(){
 this.invoices=this.receiveables;
 this.receiveable_clicked=true;
 this.paymentrequest_clicked=false;
 this.payable_clicked=false;
 }
 fetchpayables(){
 this.invoices= this.payables;
 this.receiveable_clicked=false;
 this.paymentrequest_clicked=false;
 this.payable_clicked=true;
 }
 fetchpayment_request(){
   this.invoices= this.paymentrequests;
   this.receiveable_clicked=false;
 this.paymentrequest_clicked=true;
 this.payable_clicked=false;
 }
 openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

}
