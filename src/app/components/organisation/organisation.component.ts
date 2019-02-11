import { Component, OnInit } from '@angular/core';
import { OrganisationService } from 'src/app/services/organisation.service';
import { ActivatedRoute } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { BizService } from 'src/app/provider/biz.service';
import { SessionService } from 'src/app/provider/session.service';
@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  active_index = 0;
  org_menu = [
    {name: 'About', icon: 'fa fa-sitemap', isactive: true},
    {name: 'Events', icon: 'fa fa-calendar', isactive: false},
    {name: 'Opportunities', icon: 'fa fa-globe', isactive: false},
    {name: 'Make Inquiry', icon: 'fa fa-envelope', isactive: false},
  ];

  org_id: any;
  organisation: any;
  events: any;
  opportunities: any;
  services: any;
  makerequest: any;
  user: any;
  requests: any;

  constructor(
    public organisationServices: OrganisationService,
    public formBuilder: FormBuilder,
    public businessServices: BizService,
    public session: SessionService,
    public route: ActivatedRoute,
    public spinnerService: Ng4LoadingSpinnerService ) {

    this.route.params.subscribe(params => {
      this.user = this.session.getuser();
      this.org_id = +params['id'];
      this.get_organisation(params['id']);
      this.receiverequest(this.user.user_id, this.org_id);
    });
    this.makerequest = this.formBuilder.group({
      request_type: [ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
      title: [ '', Validators.compose([ Validators.minLength(4),  Validators.required ])],
      details: [ '', Validators.compose([ Validators.minLength(4),  Validators.required ])]
    });
  }

  get_organisation( org_id ) {
    this.organisationServices.get_orgsanisation(org_id).subscribe( data => {
        this.organisation = data;
        this.services  = JSON.parse(data['services_offered']);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.organisationServices.organisation_data(3).subscribe( data => {
      this.events = data.events;
      this.opportunities = data.opportunities;
    });
  }

  show_page( item, i ) {
    const len  = this.org_menu.length;
    for (let counter = 0; counter < len; counter++ ) {
        if ( this.org_menu[counter].name === item.name ) {
          this.org_menu[counter].isactive = true;
          this.active_index = i;
        } else {
          this.org_menu[counter].isactive = false;
        }
    }
  }

  sendrequest() {
    this.spinnerService.show();
    const request = this.makerequest.value;
    request['user_id'] = this.user.user_id;
    request['org_id'] = this.org_id;
    this.businessServices.send_org_iquiry(request).subscribe(data => {
      this.spinnerService.hide();
       if (data.flag) {
         this.makerequest.reset();
         this.receiverequest(this.user.user_id, this.org_id);
       }
    });
  }

  receiverequest(user_id, org_id) {
    this.businessServices.fetchrequests_for_organisatio_and_user(user_id, org_id).subscribe( data => {
      this.requests = data;
    });
  }

}
