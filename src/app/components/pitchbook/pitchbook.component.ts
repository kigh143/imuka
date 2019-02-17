import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SessionService } from 'src/app/provider/session.service';
import { BizService } from 'src/app/provider/biz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pitchbook',
  templateUrl: './pitchbook.component.html',
  styleUrls: ['./pitchbook.component.scss']
})

export class PitchbookComponent implements OnInit {

  modalRef: BsModalRef;
  businesses: any;
  user: any;
  active_business: any;
  pitch: any;
  initial_business_id: any;

  constructor(
    private modalService: BsModalService,
    public route: ActivatedRoute,
    public businessService: BizService,
    public sessionService: SessionService) {
      this.user = this.sessionService.getuser();
      this.route.params.subscribe(params => {
        this.initial_business_id = +params['id'];
      });
  }

  ngOnInit() {
    this.fetch_business_for_user();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetch_business_for_user() {
    this.businessService.getbusinesses_for_user(this.user.user_id).subscribe( results => {
      this.businesses = results;

      const biz = results.filter( val => {
          if (val.business_id === this.initial_business_id) {
              return val;
          }
      });

      this.active_business = biz[0];

      this.load_active_business(this.active_business);
      this.fetch_pitcbook_data(this.initial_business_id);

    }, error => {
      console.log(error);
    });
  }


  load_active_business(business) {
    this.active_business = business;
    this.fetch_pitcbook_data(business.business_id);
  }

  fetch_pitcbook_data( business_id ) {
    this.businessService.get_pitch_book( business_id ).subscribe( data => {
        // this.pitch = data;
        console.log(data);
    });
  }

  save_changes() {
    this.businessService.edit_pitchbook(this.pitch).subscribe( data => {
      console.log(data);
    });
  }

}
