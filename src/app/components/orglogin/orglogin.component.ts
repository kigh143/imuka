import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
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
  name: string;
  services: any;
  website: string;
  imageUrl = 'assets/group.jpg';

  constructor( public organisationService: OrganisationService, public router: Router, public spinnerService: Ng4LoadingSpinnerService,) { }

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
    this.spinnerService.show();
    let org = {
      email:this.s_email,
      contact:this.contact,
      name:this.name,
      services: JSON.stringify(this.services),
      website: this.website
    };
    this.organisationService.create_organisation(org).subscribe( data => {
      this.spinnerService.hide();
       if(data.flag){
          localStorage.setItem('support_org', JSON.stringify(data.org));
          this.router.navigate(['/manage_organisation']);          
       }
    }, error =>{
      console.log(error);
    });
  }

}
