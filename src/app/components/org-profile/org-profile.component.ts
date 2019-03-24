import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../services/organisation.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from 'src/app/provider/auth.service';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.scss']
})
export class OrgProfileComponent implements OnInit {

  active_index = 0;
  org_menu = [
    {name:"Profile details", icon:"fa fa-sitemap", isactive:true},
    {name:"Events", icon:"fa fa-calendar", isactive:false},
    {name:"Opportunities", icon:"fa fa-globe", isactive:false},
    {name:"Our enterprenuers", icon:"fa fa-users", isactive:false},
    {name:"Inquiries", icon:"fa fa-envelope", isactive:false},
  ];
  user: any;
  organisation: any;
  services: any;
  events: any;
  opportunities: any;

  type : any;
  filesTo: any;
  logouploading :boolean = false;
  coveruploading :boolean = false;
  upload_file = false;

  constructor( 
    public organisationService: OrganisationService, 
    public spinnerService: Ng4LoadingSpinnerService
    ) { }

  ngOnInit() {
    this.user  = JSON.parse(localStorage.getItem('user_object'));
    this.get_organisation();
    this.get_events_and_opportunities();
  }

  show_page( item, i) {
    const len  = this.org_menu.length;
    for (let counter = 0; counter < len; counter++) {
        if ( this.org_menu[counter].name === item.name ) {
          this.org_menu[counter].isactive = true;
          this.active_index = i;
        } else {
          this.org_menu[counter].isactive = false;
        }
    }
  }

  get_organisation( ) {
    this.organisationService.get_orgsanisation(this.user['org_id']).subscribe( data => {
        this.organisation = data;
        this.services = JSON.parse(data['services_offered']);
    });
  }

  save_organisation() {
    this.spinnerService.show();
    this.organisationService.edit_orgsanisation(this.organisation).subscribe( data => {
      this.spinnerService.hide();
      console.log(data); });
  }

  get_events_and_opportunities() {
    this.organisationService.organisation_data(this.user['org_id']).subscribe( result => {
        this.events = result.events;
        this.opportunities = result.opportunities;
    });
  }

  getTheImage(files: File[], type){
    this.filesTo = files;
    this.type = type;
  }

  upload() {
    if(this.type == 'biz_logos'){
        this.logouploading = true;
    }else{
      this.coveruploading=true;
    }
    this.organisationService.uploadAndProgress(this.filesTo, this.type, this.user['org_id']).subscribe( result  => {
      this.coveruploading=false;
      this.logouploading=false;
      this.showforms();
    }, error => {
      console.log(' error => ' + error);
    });
  }

  showforms(){
      this.upload_file = !this.upload_file;
  }

}
