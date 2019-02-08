import { Component, OnInit } from '@angular/core';
import { OrganisationService } from 'src/app/services/organisation.service';
import { ActivatedRoute } from '@angular/router';

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
    {name: 'Group', icon: 'fa fa-users', isactive: false},
    {name: 'Make Inquiry', icon: 'fa fa-envelope', isactive: false},
  ];

  org_id: any;
  organisation: any;
  events: any;
  opportunities: any;

  constructor( public organisationServices: OrganisationService,   public route: ActivatedRoute ) {
      this.route.params.subscribe(params => {
      this.org_id = +params['id'];
      this.get_organisation(params['id']);
    });
  }

  get_organisation( org_id ) {
    this.organisationServices.get_orgsanisation(org_id).subscribe( data => {
        this.organisation = data;
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

}
