import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']

})
export class UploadComponent  {

  imgFile = '../assets/users.png';
  fileToUpload: any;
  error: string;

  constructor () {

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

    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgFile = reader.result;
    }
  }

  uploadImage () {
    alert(90);
  }

  removeImage () {
    alert(90);
  }

}
