import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.css']
})
export class ToastsComponent implements OnInit {

  constructor(private toastr: ToastrService, vcr: ViewContainerRef) {
   
   }

  ngOnInit() {

  }
  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }
  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }
  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }
  showInfo() {
    this.toastr.info('Just some information for you.');
  }
  
  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}

}
