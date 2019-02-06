import { Component, OnInit } from '@angular/core';
import { OrganisationService } from "../../services/organisation.service"
@Component({
  selector: 'app-orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.scss']
})
export class OrgloginComponent implements OnInit {
  log_password: string;
  log_email: string;

  s_email: string;
  s_passowrd: string;
  name:string;
  services: string;
  website: string;

  constructor( public organisationService: OrganisationService ) { }

  ngOnInit() {
  }

  login(){
    let org = {
      email:this.log_email,
      password:this.log_password
    }
    console.log(org);
    this.organisationService.login(org).subscribe( data =>{
      console.log(data);
    }, error =>{
      console.log(error);
    });
  }

  create_organisation(){
    let org = {
      email:this.s_email,
      password:this.s_passowrd,
      name:this.name,
      services: JSON.stringify(this.services),
      website: this.website
    }
    this.organisationService.create_organisation(org).subscribe( data => {
       console.log(data);
    }, error =>{
      console.log(error);
    });
  }

}
