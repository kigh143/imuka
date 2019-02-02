import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [1,2,3,4,5,6,7,8,8];
  title:string;
  event_type:string;
  time_of_event:string;
  description :string;
  link:string;
  venue:string;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  get_all_events(){

  }

  add_event(){
      let event = {
        title:this.title,
        event_type:this.event_type,
        time_of_event:this.time_of_event,
        description :this.description,
        link:this.link,
        venue:this.venue
      };
      console.log(event);
  }
}
