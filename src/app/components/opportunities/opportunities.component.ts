import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from '../../services/events.service';
import { SessionService } from '../../provider/session.service';
import { Router } from '@angular/router';
import { ToastsComponent} from '../toasts/toasts.component'
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
  opportunities_clone: any;
  filter_info: Array<any> = [{
    name: 'Category',
    db_name: 'opp_type',
    options: [
      'Market/Supply Opportunities',
      'Partnership Opportunities',
      'Franchising/Distributorships Opportunities',
      'General'
    ]
  }
]
  constructor(
    private modalService: BsModalService,
    public sessionService: SessionService,
    public router: Router,
    public eventServices: EventsService,
    public alert: ToastsComponent) { }

  ngOnInit() {
    this.user = this.sessionService.getuser();
    this.get_opportunities();
  }

  openTheModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get_opportunities() {
    this.eventServices.fetch_opportunities().subscribe( data  => { this.opportunities = data;  this.opportunities_clone = data; });
  }
  myopportunities(){
    //will fetch the opps
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
    this.eventServices.add_opportunities(data).subscribe(result => {
      this.alert.showSuccess("Opportunity Added");
      this.modalRef.hide();
      this.get_opportunities();
     });
  }


  onChange(event, main) {
    this.opportunities_clone = this.opportunities_clone.filter((opportunity_value) => {
      if (opportunity_value[main['db_name']] === event.target.value) {
        return opportunity_value;
      }
    });
  }

reset() {
  this.get_opportunities();
}

}
