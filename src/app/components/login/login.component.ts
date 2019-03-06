import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../provider/auth.service'
import {SessionService} from '../../provider/session.service'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NotifierService } from 'angular-notifier';
import { AlertComponent } from 'ngx-bootstrap/alert/alert.component';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ToastsComponent} from '../toasts/toasts.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: any; 
  alerts: any[] = [{
    type: 'success',
    msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
    timeout: 5000
  }];
  private _success = new Subject<string>();
  imageUrl = 'assets/ia.jpg';
  staticAlertClosed = false;
  successMessage: string;
  
  private readonly notifier: NotifierService;
  constructor(private router: Router, public formBuilder: FormBuilder, public auth: AuthService,
    public spinnerService: Ng4LoadingSpinnerService,  public notifierService: NotifierService,
    public session: SessionService, public alert: ToastsComponent) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([ Validators.pattern('^[a-zA-Z0-9_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]+$'),Validators.required])],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required])]
    });
    this.notifier = notifierService;
    this.notifier.notify( 'success', 'You are awesome! I mean it!' );
    
  }
  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }
  login() {

    this.spinnerService.show();
    let user = this.loginForm.value;
    this.auth.login(user).subscribe( data=>{ 
      this.spinnerService.hide();
       if (data.flag){
         this.session.login(data.user);
         this.router.navigate(['/']); 
       }else{
        this.alert.showError(data.message);
       }
    });
  }
  add(): void {
    this.alerts.push({
      type: 'info',
      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,
      timeout: 5000
    });
  }
  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
