import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AbstractControl} from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap';
import { FormBuilder, Validators } from "@angular/forms";
import {AuthService} from "../../provider/auth.service";
import {SessionService} from "../../provider/session.service";
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  modalRef: BsModalRef;
  config = {
    backdrop: true,};
  oneAtATime: boolean = true;
  nots:any;
  changeform:any;
  errordiv=false;
  currentuser:any;
  notifications=[{
	name:"on event posted",
	isclicked:true
  },
{
	name:"on opportunity posted",
	isclicked:true
  },
  {
	name:"investment request",
	isclicked:true  },
  {
	name:"followed update",
	isclicked:true
  },
  {
	name:"connection request",
	isclicked:true
  }
  ]

  constructor(public formBuilder: FormBuilder, public auth: AuthService, public session: SessionService, private modalService: BsModalService) { 
   this.nots=this.notifications;
   let data = this.session.getuser();
   this.currentuser=data;
   this.changeform=this.formBuilder.group({
    oldpassword: ["", Validators.compose([ Validators.pattern("^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$"),Validators.required])],
    newpassword: ["", Validators.compose([Validators.minLength(5), Validators.required])],
    confirmPassword:["", Validators.compose([Validators.minLength(5), Validators.required])]
   });
  }

  ngOnInit() {
  }

  turnn(i){
  for(let j=0; j<this.nots.length; j++){
      if(i === j){
        this.nots[j].isclicked != this.nots[j].isclicked;
      }
  }
  	
  }
  changepassword(){
    let passwordchange= this.changeform.value;
     if(passwordchange['newpassword'] != passwordchange['confirmPassword']){
        this.errordiv=true;
     }
     else{
       passwordchange['user_id'] = this.currentuser.user_id;
       this.auth.changepassword(passwordchange).subscribe( data=>{
        if(data.flag){
          this.changeform.reset();
         //add alert
        }
       })
     }

  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

}
