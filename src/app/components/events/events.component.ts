import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from '../../services/events.service';
import { SessionService } from 'src/app/provider/session.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: any;
  title: string;
  event_type: string;
  time_of_event: string;
  description: string;
  link: string;
  venue: string;
  user: any;
  filter: string;

  events_clone: any;

  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    public eventServices: EventsService,
    public sessionservice: SessionService,
    public router: Router
    ) {
      this.user  = this.sessionservice.getuser();
  }

  ngOnInit() {
    this.get_all_events();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get_all_events() {
      this.eventServices.fetch_events().subscribe( data  =>  {
          this.events = data;
          this.events_clone  = this.events;
      }, err => {
        console.log(err);
      });
  }

  add_event() {
      const event = {
        title: this.title,
        event_type: this.event_type,
        time_of_event: this.time_of_event,
        description : this.description,
        link: this.link,
        venue: this.venue
      };
      if ( this.user.user_type === 'org' ) {
        event['added_by'] = this.user.org_id;
        event['user_type'] = 'org';
      } else {
        event['added_by'] = this.user.user_id;
        event['user_type'] = 'user';
      }
      this.eventServices.add_event(event).subscribe( data => { this.router.navigate(['/events']); });
  }

  onChange( value ) {
    if (value.length > 0 ) {
      this.events_clone  = this.events;
      this.events_clone = this.events_clone.filter((event_value) => {
        if (event_value.event_type === value) {
          return event_value;
        }
      });
    } else {
      console.log(' value is emtyp');
    }
  }
}
