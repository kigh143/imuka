import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.scss']
})
export class OrgloginComponent implements OnInit {
  log_password: string;
  log_email: string;

  constructor() { }

  ngOnInit() {
  }

  login(){
    let org = {
      email:this.log_email,
      log_password:this.log_password
    }
  }

}
