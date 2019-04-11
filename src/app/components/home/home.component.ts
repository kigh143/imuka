import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../provider/session.service';
import { BizService } from 'src/app/provider/biz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  header: string;
  myinvestment_count;
  request_count;
  count;
  constructor( public router: Router,  public sessionService: SessionService, public businessService:BizService) { }

  ngOnInit() {
    const data = this.sessionService.getuser();
    this.user = data;
    if ( this.user.name !== '') {
      this.header = this.user.name;
    } else {
      this.header = 'Welcome to imukaAccess';
    }
    this.getcount();
  }

  navigate_to(page) {
    this.router.navigate([page]);
  }
  getcount(){
    this.businessService.getcount(this.user.user_id).subscribe(data => {
       this.count= data;
       this.myinvestment_count = this.count.my_investment;
       this.request_count = this.count.investment_requests;

       console.log(this.myinvestment_count + "HELLO");

    });

}
}