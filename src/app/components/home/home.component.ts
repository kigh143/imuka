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
  business;
  businessupdates;
  counts:any;
  constructor( public router: Router,  public sessionService: SessionService, public businessService:BizService) { 
    this.business=[{
      business_id:26
    },
      {business_id:23},
      {business_id:27},
      {business_id:85},
      {business_id:25}
  ]
  }

  ngOnInit() {
    const data = this.sessionService.getuser();
    this.user = data;
    if ( this.user.name !== '') {
      this.header = this.user.name;
    } else {
      this.header = 'Welcome to imukaAccess';
    }
    this.getcount();
    this.getCounts();
    this.getbusinessupdate();
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
getCounts(){
  this.businessService.gethomecounts().subscribe(results => {
    this.counts = results
    console.log(this.counts);
  });
}
getbusinessupdate(){
  this.businessService.getbusinessupdates().subscribe(results =>{
    this.businessupdates = results;
    console.log(this.businessupdates)
  })
}

}