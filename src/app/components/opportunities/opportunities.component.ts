import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { EventsService } from "../../services/events.service";

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {
  opportunities = []
  modalRef: BsModalRef;
  link:string;
  due_date:any;
  opp_type:any;
  title:any;
  short_description:any;
  
  constructor(private modalService: BsModalService,   public eventServices: EventsService) { }

  ngOnInit() {
    this.eventServices.fetch_opportunities().subscribe( data  => { 
        this.opportunities = data;
    })
  }

  openTheModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  add_opportunities(){
    let data = {
        added_by:2,
        link:this.link,
        due_date:this.due_date,
        opp_type:this.opp_type,
        title:this.title,
        short_description:this.short_description
    };
    this.eventServices.add_opportunities(data).subscribe( data  => { 
      this.opportunities = data;
  })
  }

}
