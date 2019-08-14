import { Component, Input, Output } from '@angular/core';
import { SessionService } from '../../provider/session.service';
import { AuthService } from '../../provider/auth.service';

@Component({

  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']

})
export class UploadComponent  {

  imgFile = '../../assets/users.png';
  fileToUpload: any;
  error: string;
  uploadingStatus = false;
  files: any;
  showUpload = false;
  compeleted = false;

  @Input() type: any; // user_profile, org_profile, biz_logos, business_cover, org_cover
  @Input() id: any;
  @Input() visibility;
  
  constructor (public authService: AuthService, public sessionService: SessionService ) {

  }

  openCamera ( files ) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.error = 'Only images are supported.';
      return;
    }
    this.files = files;
    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      // this.imgFile = reader.result;
      this.showUpload = true;
    }
  }

  uploadImage () {
    this.uploadingStatus = true;
    this.authService.uploadAndProgress(this.files, this.type, this.id).subscribe( result  => {
      this.uploadingStatus = false;
      // if type is user_profile save to localstorage;
      if ( this.type === 'user_profile') {
        this.sessionService.login(result.result['user']);
      }
      this.compeleted = true;
      console.log(result);
    }, error => {
      console.log(error);
      this.error = error.mesaage;
      this.uploadingStatus = false;
    });
  }

  removeImage () {
    this.imgFile = null;
    this.showUpload = false;
  }

}
