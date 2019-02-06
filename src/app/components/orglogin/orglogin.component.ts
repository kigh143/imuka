import { Component, OnInit } from '@angular/core';
import { OrganisationService } from "../../services/organisation.service"
import { Router } from '@angular/router';
@Component({
  selector: 'app-orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.scss']
})
export class OrgloginComponent implements OnInit {
  log_password: string;
  log_email: string;
  s_email: string;
  contact: string;
  name:string;
  services: any;
  website: string;

  constructor( public organisationService: OrganisationService, public router: Router) { }

  ngOnInit() {}

  login(){
    let org = {
      email:this.log_email,
      password:this.log_password
    }

    this.organisationService.login(org).subscribe( data =>{
      console.log(data);
    }, error =>{
      console.log(error);
    });
  }

  create_organisation(){
    let org = {
      email:this.s_email,
      contact:this.contact,
      name:this.name,
      services: JSON.stringify(this.services),
      website: this.website
    };
    this.organisationService.create_organisation(org).subscribe( data => {
       if(data.flag){
          localStorage.setItem("support_org", JSON.stringify(data.org));
          this.router.navigate(['/manage_organisation']);          
       }
    }, error =>{
      console.log(error);
    });
  }

}
