import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from '../../services/events.service';
import { SessionService } from 'src/app/provider/session.service';
import { Router } from '@angular/router';
import { ToastsComponent} from '../toasts/toasts.component';



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
  event_image:any;
  all_event : any;
 filter_name;
 bookmarks=[];
 event_filter={
    name:"",
    options:[]
  }

  events_clone: any;
  filter_info:Array<any>=[
      {
      name:"Event type",
      db_name:"event_type",
      options:[
        'Business networking',
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
      }
  ];
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    public eventServices: EventsService,
    public sessionservice: SessionService,
    public router: Router,
    public alert: ToastsComponent,


    ) {
  }

  ngOnInit() {
    this.user  = this.sessionservice.getuser();
    this.get_all_events();
  }



  onChange(event, main) {
      this.events_clone = this.events_clone.filter((event_value) => {
        if (event_value[main['db_name']] === event.target.value) {
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
        venue: this.venue,
        event_image:this.event_image
      };
      if ( this.user.user_type === 'org' ) {
        event['added_by'] = this.user.org_id;
        event['user_type'] = 'org';
      } else {
        event['added_by'] = this.user.user_id;
        event['user_type'] = 'user';
      }
      this.eventServices.add_event(event).subscribe( data => {
        this.alert.showSuccess("Event Added");
        this.modalRef.hide();
        this.get_all_events();
      });
  }

  reset() {
    this.get_all_events();
  }

  myevent(){
    this.all_event = false;
    this.eventServices.fetch_myevents(this.user.user_id).subscribe( data  => { this.events = data;  this.events_clone = data; });

  }
  mybookmark(event){
    // let events = JSON.stringify(event)
    let bmarks= localStorage.getItem('bookmarks')


      if(bmarks !=null){
       this.bookmarks = JSON.parse(bmarks);
      }

      this.bookmarks.push(event);
      localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
      this.alert.showSuccess("Event Bookmarked");
    }


}
