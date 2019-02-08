import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from '../../services/events.service';
import { SessionService } from '../../provider/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {
  opportunities = [];
  modalRef: BsModalRef;
  link: string;
  due_date: any;
  opp_type: any;
  title: any;
  short_description: any;
  user: any;
  filter_data = [];
  constructor(
    private modalService: BsModalService,
    public sessionService: SessionService,
    public router: Router,
    public eventServices: EventsService) { }

  ngOnInit() {
    this.user = this.sessionService.getuser();
    this.get_opportunities();
  }

  openTheModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get_opportunities() {
    this.eventServices.fetch_opportunities().subscribe( data  => { this.opportunities = data; });
  }

  add_opportunities() {
    const data = {
        link: this.link,
        due_date: this.due_date,
        opp_type: this.opp_type,
        title: this.title,
        short_description: this.short_description
    };
    if ( this.user.user_type === 'org' ) {
      data['added_by'] = this.user.org_id;
      data['user_type'] = 'org';
    } else {
      data['added_by'] = this.user.user_id;
      data['user_type'] = 'user';
    }
    this.eventServices.add_opportunities(data).subscribe(result => {  this.router.navigate(['/opportunities']);  });
  }

  filter_opportunities() {

  }

}
