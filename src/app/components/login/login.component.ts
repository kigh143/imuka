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
import { BizService } from 'src/app/provider/biz.service';


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
  imageUrl = 'assets/entrepreneur.jpg';
  staticAlertClosed = false;
  successMessage: string;
  private readonly notifier: NotifierService;
  constructor(private router: Router, 
    public formBuilder: FormBuilder, 
    public auth: AuthService,
    public spinnerService: Ng4LoadingSpinnerService,  
    public businessService : BizService,
    public notifierService: NotifierService,
    public session: SessionService, 
    public alert: ToastsComponent) {
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


  get_old_businessee(){
    this.businessService.get_old_businesses().subscribe(mdayta => {
      console.log( mdayta);
      mdayta.forEach(bis => {
        const biz = {
          business_name:bis.business_name, 
          sectors:bis.line_of_business_operation, 
          legal_status:bis.legal_entity, 
          region:bis.region, 
          start_of_operation:bis.date_of_start_of_operation, 
          verified:'Y', 
          business_logo:"http://imukaaccess.com/images/biz_logos/logo.jpg", 
          owner_id:'57', 
          location:bis.business_address, 
          website:bis.business_website, 
          country:bis.country, 
          date_of_reg:bis.date_of_registration, 
          business_stage:bis.business_stage_of_production, 
          on_program:'Y', 
          description:bis.business_products, 
          email:bis.contact_person, 
          phone:bis.contact_number, 
          business_cover:" http://imukaaccess.com/images/business_cover/cover.jpg"
        };
  
        this.businessService.addbiz(biz).subscribe( data => {
          console.log(data);
        })
      });
     
    })
  }

  get_old_users(){

    this.businessService.get_old_users().subscribe(mdayta => {
      console.log( mdayta);
      mdayta.forEach(user => {
          const user_data = {
            name:user.user_Fname + '  ' +user.user_Lname, 
            email:user.user_email, 
            user_type:user.status, 
            password:"123456789", 
            profile_pic:"http://imukaaccess.com/images/user_profile/dp.jpg", 
            membership_id:user, 
            phone:user.user_phoneno, 
            country:user.user_country, 
            verified:"Y", 
            verified_by_imuka:"Y", 
            gender:user.user_gender, 
            salutation:user.user_title,
            business_name: user.business_name
        };
  
        this.businessService.adduserbusiness(user_data).subscribe( data => {
          console.log(data);
        })
      });
     
    })

  }


}

