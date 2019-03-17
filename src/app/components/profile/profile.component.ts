import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../provider/session.service';
import { AuthService } from '../../provider/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastsComponent } from '../toasts/toasts.component';
import { Http } from '@angular/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    oneAtATime = true;
    user: any;
    files: any[];
    url = 'assets/user.png';
    name: string;
    email: string;
    phone: string;
    address: string;
    dob: string;
    mstatus: string;
    gender: string;
    education: string;
    relevant_exp: string;
    relevant_skills: string;
    expertise: string;
    current: any;
    selectedFile: any;
    percentDone: number;
    uploadSuccess: any;

  constructor(
    public sessionService: SessionService,
    public authService: AuthService,
    public spinnerService: Ng4LoadingSpinnerService,
    public http: Http,
    public alert: ToastsComponent) {

    }

  ngOnInit() {
    const data = this.sessionService.getuser();
    this.user = data;
  }

  save(value) {
    if ( value === 'name') {
      this.send_request({name: this.user.name});
   } else  if ( value === 'contact') {
      this.send_request({email: this.user.email, phone: this.user.phone, address: this.user.address });
   } else  if ( value === 'personnal') {
      this.send_request({dob: this.user.dob, mstatus: this.user.mstatus, gender: this.user.gender});
   } else  if ( value === 'education') {
      this.send_request({education: this.user.education});
   } else  if ( value === 'experience') {
      this.send_request(
        {
          relevant_exp: this.user.relevant_exp ,
          relevant_skills: this.user.relevant_skills ,
          expertise: this.user.expertise
        }
        );
    }
  }

  send_request(object) {
    console.log(object);
    this.spinnerService.show();
      this.authService.edit_user(object, this.user.user_id).subscribe( data => {
       this.spinnerService.hide();
        if (data.flag) {
          this.alert.showSuccess('field(s) updated');
          console.log(data);
          this.sessionService.login(data.user);
          this.current = this.sessionService.getuser();
          console.log(this.current);
        }
      }, error => {
        console.log( error);
      });
  }

  upload( files: File[] ) {
    const type = 'profile';
    this.authService.uploadAndProgress(files, type, this.user.user_id).subscribe( data  => {
      console.log(' Data => ' + data);
    }, error => {
      console.log(error);
    });
  }
}
