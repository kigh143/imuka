import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-pitchbook',
  templateUrl: './pitchbook.component.html',
  styleUrls: ['./pitchbook.component.scss']
})
export class PitchbookComponent implements OnInit {

  modalRef: BsModalRef;
  businesses = [1,2,3]
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
