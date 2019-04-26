import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {AbstractControl} from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap';

import {AuthService} from "../../provider/auth.service";
import {SessionService} from "../../provider/session.service";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  modalRef: BsModalRef;
 
  nestedForm;
  config = {
    backdrop: true,};
  oneAtATime: boolean = true;
  nots:any;
  changeform:any;
  errordiv=false;
  currentuser:any;
  investor_interest=[];
  interests: Array<string>=["Agriculture or Agribusiness or Value-addition",
  "Clean Energy or Recycling or Upcycling and Environmental Conservation",
  "Technology or ICT and IT-Enabled Services","Tourism and Hospitality","Healthcare and Pharmaceuticals",
  "Manufacturing","Trade(Retail and Wholesale)","Transport and Logistics","Education", "Services"]
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
    oldpassword: ["", Validators.compose([ Validators.minLength(5),Validators.required])],
    newpassword: ["", Validators.compose([Validators.minLength(5), Validators.required])],
    confirmPassword:["", Validators.compose([Validators.minLength(5), Validators.required])]
   });
  }

  ngOnInit() {
    this.nestedForm = this.formBuilder.group({
      favFruits: this.addFruitsControls(),
      

    });
    console.log(this.currentuser);
  }
  addFruitsControls() {
    const arr = this.interests.map(item => {
      return this.formBuilder.control(false);
    });

    return this.formBuilder.array(arr);
   
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
       console.log("bambi");
        this.errordiv=true;
     }
     else{
       passwordchange['user_id'] = this.currentuser.user_id;
       this.auth.changepassword(passwordchange).subscribe( data=>{
        if(data.flag){
          this.changeform.reset();
         console.log("comeon")
        }

       })
     }

  }
  resetpassword(){
    
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  } 
  get fruitsArray() {
    return <FormArray>this.nestedForm.get('favFruits');
  }
  getSelectedFruitsValue() {
    this.investor_interest = [];
    this.fruitsArray.controls.forEach((control, i) => {
      if (control.value) {
        this.investor_interest.push(this.interests[i]);
      }
    });
     console.log(this.investor_interest)
  }

   addinterest(){
      if(this.investor_interest!=null){
         this.auth.addinterest(this.investor_interest, this.currentuser.user_id).subscribe(data=>{
           if(data.flag){
             console.log("success")
             this.refresh()
           }
         })
      }
       
   }
   refresh(): void {
    window.location.reload();
}

}
