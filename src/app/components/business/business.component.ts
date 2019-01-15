import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 product:boolean=true;
 documents:boolean=false;
 team:boolean=false;
 financial:boolean=false;
 items=[{
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
],
bizteam:any;
bizproduct:any;
bizdoc:any;
  constructor(public formBuilder: FormBuilder, public router : Router) {
   this.bizteam=this.formBuilder.group({
   teamname:[ "", Validators.compose([ Validators.minlength(4),  Validators.required ])],
   position:[ "", Validators.compose([ Validators.minlength(2),  Validators.required ])],
   phonenumber: [ "", Validators.compose([ Validators.minlength(10),  Validators.required ])],
   email: [ "", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),  Validators.required ])],
   address:[ "", Validators.compose([ Validators.minlength(4),  Validators.required ])],
   image:[]
   });

    this.bizdoc=this.formBuilder.group({
   type:[ "", Validators.compose([ Validators.minlength(4),  Validators.required ])],
   docupload:[ "",Validators.required ],
  
   });
   
    this.bizproduct=this.formBuilder.group({
   pdtname:[ "", Validators.compose([ Validators.minlength(4),  Validators.required ])],
   descript:[ "", Validators.compose([ Validators.minlength(2),  Validators.required ])],
   pdtimage:[]
   });
   }

  ngOnInit() {
  }
  
  showdiv(i, item){
   this.product=false;
   this.documents=false;
   this.team=false;
   this.financial=false;
  	this.items[i].isclicked = !this.items[i].isclicked;
  	if( i === 0 ){
        this.product = true
  	}else 	if( i === 1 ){

        this. documents = true

  	}else 	if( i === 2 ){

        this.financial = true

  	}else 	if( i === 3 ){

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

}
addteam(){
  if (this.bizteam.valid) {
    this.router.navigate(['/dashboard'])
    console.log("Form Submitted!");
    this.bizteam.reset();
  }
}
}
