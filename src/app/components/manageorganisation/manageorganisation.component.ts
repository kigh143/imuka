import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../provider/auth.service"
import { SessionService } from 'src/app/provider/session.service';

@Component({
  selector: 'app-manageorganisation',
  templateUrl: './manageorganisation.component.html',
  styleUrls: ['./manageorganisation.component.scss']
})
export class ManageorganisationComponent implements OnInit {
  org: any;
  email: string;
  password: string;
  phone: string;
  name:string; 

  constructor( public router : Router, public auth :AuthService, public session: SessionService) {
      let stored_org = localStorage.getItem("support_org");
      if( stored_org !== null){
          this.org = JSON.parse(stored_org);
      }else{
          this.router.navigate(["/create_organisation"]);
      }
   }

  ngOnInit() {
  }

  create_admin(){
    let user = {
      org_id : this.org.org_id,
      name: this.name,
      password: this.password,
      phone: this.phone,
      email: this.email
    }
    this.auth.add_user_to_org(user).subscribe( data  => {
      if(data.flag){
        this.session.login(data.user);
        this.router.navigate(['/']);
      }else{
        console.log(data.session)
      }
    })
  }

}
