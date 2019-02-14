import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {
error:string;
  constructor(private toastr: ToastrService) {
   
   }

  ngOnInit() {

  }
  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!', {
      closeButton:true
    });
  }
  showError(error) {
    this.toastr.error(error, 'Oops!', {
      closeButton:true
    });
  }
  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!',  {
      closeButton:true
    });
  }
  showInfo() {
    this.toastr.info('Just some information for you.',  'Alert!',  {
      closeButton:true,
      positionClass:'toast-center'
    });
  }
  
  showToaster(){
    this.toastr.error('everything is broken', 'Major Error');
}

}
