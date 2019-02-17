import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../provider/session.service';
import { AuthService } from '../../provider/auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  oneAtATime: boolean = true;
  user: any;
  files: any[];
  url:any;
  constructor(public sessionService: SessionService, 
    public authService: AuthService, 
    public spinnerService: Ng4LoadingSpinnerService ) { 
      this.files = [];
    }

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

  selectedFile: any;

  ngOnInit() {
    const data = this.sessionService.getuser();
    this.user = data;
  }

  save(value) {
    if ( value === 'name') {
      this.send_request({name: this.name});
   } else  if ( value === 'contact') {
      this.send_request({email: this.email, phone: this.phone, address: this.address });
   } else  if ( value === 'personnal') {
      this.send_request({dob: this.dob, mstatus: this.mstatus, gender: this.gender});
   } else  if ( value === 'education') {
      this.send_request({education: this.education});
   } else  if ( value === 'experience') {
      this.send_request({relevant_exp: this.relevant_exp, relevant_skills: this.relevant_skills, expertise: this.expertise });      
    }
  }

  send_request(object) {
    this.spinnerService.show();
      this.authService.edit_user(object, this.user.user_id).subscribe( data => {
        this.spinnerService.hide();
        if (data.flag) {
          console.log(data);
          this.sessionService.login(data.user);
        }
      }, error => {
        console.log( error);
      });
  }

  processFile(imageInput: any) {
    const file = imageInput.target.files[0];
  }


  onFileChanged(event: any) {
    this.files = event.target.files;
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.spinnerService.show();
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.authService.uploadpp( uploadData ).subscribe( data => {
      if ( data.flag ) {
        this.url = this.selectedFile.target.result;
        this.spinnerService.hide();
      }
    });
  }

  onUpload() {}

}
