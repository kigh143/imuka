import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from "../../services/events.service";
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events:any;
  title:string;
  event_type:string;
  time_of_event:string;
  description :string;
  link:string;
  venue:string;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,  public eventServices: EventsService) { 
  }

  ngOnInit() {
    this.get_all_events();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get_all_events(){
      this.eventServices.fetch_events().subscribe( data  =>  {
          this.events = data;
          console.log(data);
      }, err=>{
        console.log(err);

      });
  }

  add_event(){
      let event = {
        title:this.title,
        event_type:this.event_type,
        time_of_event:this.time_of_event,
        description :this.description,
        link:this.link,
        venue:this.venue,
        added_by:2
      };
      console.log(event);
      this.eventServices.add_event(event).subscribe( data => {
        console.log(data);
      })
  }
}
