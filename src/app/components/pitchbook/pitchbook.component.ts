import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BizService } from 'src/app/provider/biz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pitchbook',
  templateUrl: './pitchbook.component.html',
  styleUrls: ['./pitchbook.component.scss']
})

export class PitchbookComponent {

  modalRef: BsModalRef;
  business: any;
  business_id: any;
  pitch: any;

  constructor(
    private modalService: BsModalService,
    public route: ActivatedRoute,
    public businessService: BizService) {
      this.route.params.subscribe(params => {
        this.business_id = +params['id'];
        this.fetch_pitcbook_data(this.business_id);
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetch_pitcbook_data( business_id ) {
    this.businessService.fetch_abusiness( business_id ).subscribe( data => {
        this.business = data.business_info;
        console.log(this.business);
    });
  }

  save_changes() {
    this.businessService.edit_pitchbook(this.pitch).subscribe( data => {
      console.log(data);
    });
  }

}
