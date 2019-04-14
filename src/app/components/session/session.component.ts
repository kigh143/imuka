import { Component, OnInit } from '@angular/core';
import { SessionapiService } from 'src/app/provider/sessionapi.service';
import { ActivatedRoute } from '@angular/router';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SessionService } from 'src/app/provider/session.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  session_id: any;
  session_info: any;

  comment_body = {
    user_id:'',
    session_id:'',
    comment:''
  }

  modalRef: BsModalRef;
  user: any;

  isProcesssing = false;
  btnText = 'Post Comment';

  constructor(  private modalService: BsModalService,
    public api: SessionapiService,
    public route: ActivatedRoute,
    public sessionservice: SessionService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.session_id = +params['id'];
      this.getSession(params['id']);
    });
    this.user  = this.sessionservice.getuser();
    this.comment_body.user_id = this.user.user_id;
    this.comment_body.session_id = this.session_id;
  }

  getSession(session_id) {
    this.api.getasession(session_id).subscribe( data => {
      this.session_info = data;
    }, error =>{
      console.dir(error);
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addComment() {
    this.isProcesssing = true;
    this.btnText= 'Please Wait ...';
    this.api.commentonsession(this.comment_body).subscribe( data => {
     this.modalRef.hide();
     this.isProcesssing = false;
     this.btnText = 'Post Comment';
     this.getSession(this.session_id);
    }, error =>{
      console.dir(error);
    });
  }
}
