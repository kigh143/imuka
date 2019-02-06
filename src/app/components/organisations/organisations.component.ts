import { Component, OnInit } from '@angular/core';
import { OrganisationService } from 'src/app/services/organisation.service';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {
  organisations: any;
  constructor( public organisationService: OrganisationService) { }

  ngOnInit() {
    this.organisationService.get_all_orginsations().subscribe( data => {
        this.organisations = data;
    })
  }

}
