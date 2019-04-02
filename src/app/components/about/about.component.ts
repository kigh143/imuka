import { Component, OnInit } from '@angular/core';
import { BizService } from 'src/app/provider/biz.service';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
  imageUrl = 'assets/biz_bg.jpg';
  counts: any;
  opportunities= [];

  constructor(public businessService : BizService, public eventServices :EventsService) {
    this.getCounts();
  }

  getCounts(){
    this.businessService.gethomecounts().subscribe(results => {
      this.counts = results
    });
  }



}
