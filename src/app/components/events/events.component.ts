import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from '../../services/events.service';
import { SessionService } from 'src/app/provider/session.service';
import { Router } from '@angular/router';
import { FiltersComponent} from '../../components/filters/filters.component'
import { filter } from 'rxjs/operators';
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
 filter_name;
 event_filter={
    name:"",
    options:[]
  }

  events_clone: any;
  filter_info:Array<any>=[{
    name:"Event type",
    db_name:"event_type",
    options:[
      'Business networking event',
      'Workshop/Conference',
      'Training',
      'Pitching'
    ]
  },
  {
    name:"Region",
    db_name:"region",
    options:[
     'Western',
     'Northern',  
     'Eastern',
      'Southern',
      'Others',
      'All'
    ]
  },
  {
    name:"Recomended by",
    db_name:"event",
    options:[
      'Imuka',
      'Support Organisations',
      'Entreprenuers',
      'All',
    ]
  },
 
]
   
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
    console.log(this.filter_info)
  }

  onChange(event, main) {
      // this.events_clone  = this.events;
      console.log(this.events_clone )
      this.events_clone = this.events_clone.filter((event_value) => {
        if (event_value[main['db_name']] === event.target.value) {
          console.log(event_value);
          return event_value;
        }
      });
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

  reset(){
    this. get_all_events();
  }
}
