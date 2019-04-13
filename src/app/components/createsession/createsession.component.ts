import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../provider/session.service';
import { SessionapiService } from 'src/app/provider/sessionapi.service';


@Component({
  selector: 'app-createsession',
  templateUrl: './createsession.component.html',
  styleUrls: ['./createsession.component.scss']
})
export class CreatesessionComponent implements OnInit {

  form = false;
  mySessions = [];

  session = {
    session_cost: '',
    description: '',
    title: '',
    location: '',
    session_type: '',
    session_date: ''
  };

  user: any;

  constructor(public sessionService: SessionService, public api: SessionapiService) { }

  ngOnInit() {
    this.user = this.sessionService.getuser();
    this.getAllMySessions(this.user.user_id);

  }

  showFor(){
    this.form = !this.form;
  }

  createSession() {
    this.session['added_by'] = this.user.user_id;
    this.api.creatsession(this.session).subscribe( data =>{
      if(data.flag){
        this.showFor();
      }
    }, error =>{
      console.log(error);
    });
  }

  getAllMySessions(user_id){
    this.api.getmysessions(user_id).subscribe( data => {
      this.mySessions = data;
      console.dir(data);
    }, error =>{
      console.dir(error);
    });
  }

}
