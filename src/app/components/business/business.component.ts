import { Component, OnInit , Output, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
   modalRef: BsModalRef;
   headElements = ['Id', 'Item', 'unit price', 'Unit', 'Price', 'Action'];

 products=[{
name:'matooke',
image:'assets/v.jpg',
description:'The best product descriptions address your ideal buyer directly and personally. You ask and answer questions as if you’re having a conversation with them. You choose the words your ideal buyer uses. You use the word you.',


	},
	{
name:'Rice',
image:'assets/v.jpg',
description:'The best product descriptions address your ideal buyer directly and personally. You ask and answer questions as if you’re having a conversation with them. You choose the words your ideal buyer uses. You use the word you.',


	},{
name:'Cassava',
image:'assets/v.jpg',
description:'The best product descriptions address your ideal buyer directly and personally. You ask and answer questions as if you’re having a conversation with them. You choose the words your ideal buyer uses. You use the word you.'

	}
  
	];
  documentsi=[{
    name:'mdd',
    image:'assets/PDF_logo.png'
  },
  {
    name:'yean',
    image:'assets/wordicon.png'
  },
  {
    name:'led',
    image:'assets/excel.png'
  }
  ];
business:boolean=true;
 product:boolean=false;
 documents:boolean=false;
 team:boolean=false;
 financial:boolean=false;
 items=[{
  name:'business',
  isclicked:false,
  type:'business',
  icon:'fa fa-file'
 },
 {
 	name:'product',
 	isclicked:false,
  type:'products',
  icon:'fa fa-cubes'
 },
 

 {
 	name:'documents',
 	isclicked:false,
  type:'documents',
  icon:'fa fa-file'
 },
  {
  name:'Financial records',
  isclicked:false,
icon:'fa fa-credit-card',
  type:'Financial records'
 },
 {
 	name:'team',
 	isclicked:false,
  type:'team',
  icon:'fa fa-users'}
];
 
bizteam:any;
bizproduct:any;
bizdoc:any;
bizfinancial:any;
constructor(public formBuilder: FormBuilder, public router : Router, public modalService: BsModalService ) {
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
  }
  
showdiv(i, item){
   this.business=false;
    this.product=false;
    this.documents=false;
    this.team=false;
    this.financial=false;
    this.items[i].isclicked = !this.items[i].isclicked;
    if( i === 0 ){
        this.business = true
    }else 	if( i === 1 ){

        this.product = true

    }else 	if( i === 2 ){

        this.documents = true

    }else 	if( i === 3 ){

        this.financial = true
    }
    else if(i === 4){
     this.team = true

    }

}
addpdt(){
  if (this.bizproduct.valid) {
    this.router.navigate(['/dashboard'])
    console.log("Form Submitted!");
    this.bizproduct.reset();
  }
}
adddoc(){
  if (this.bizdoc.valid) {
      this.router.navigate(['/dashboard'])
      console.log("Form Submitted!");
      this.bizdoc.reset();
  }
}
addfinancial(){
if (this.bizfinancial.valid) {
    this.router.navigate(['/dashboard'])
    console.log("Form Submitted!");
    this.bizfinancial.reset();
  }
}
addteam(){
  if (this.bizteam.valid) {
    this.router.navigate(['/dashboard'])
    console.log("Form Submitted!");
    this.bizteam.reset();
  }
}
openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
