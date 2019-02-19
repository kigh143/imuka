
import { Component, OnInit , Output, TemplateRef ,  OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig, BsDatepickerViewMode } from 'ngx-bootstrap/datepicker';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {
FormGroup,
FormBuilder,
FormControl,
Validators
} from '@angular/forms';
import { Chart } from 'angular-highcharts';
import { TabsModule } from 'ngx-bootstrap/tabs';
import {BizService} from '../../provider/biz.service';
import {SessionService} from '../../provider/session.service';
import { ActivatedRoute } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap';
@Component({
  selector: 'app-investable-business',
  templateUrl: './investable-business.component.html',
  styleUrls: ['./investable-business.component.scss']
})
export class InvestableBusinessComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  modalRef: BsModalRef;
  headElements = ['Id', 'Item', 'unit price', 'Unit', 'Price', 'Action'];
  bsValue: Date = new Date(2017, 7);
  minMode: BsDatepickerViewMode = 'month';
  bsConfig: Partial<BsDatepickerConfig>;
  complete: any;
  business_id: any;
  business_data: any;
  bizteam: any;
  bizdoc: any;
  bizproduct: any;
  bizfinancial: any;
  biznes: any;
  dailyupdates: any;
  chart: Chart;
  linechart: Chart;
  mline: Chart;
  piechart: Chart;
  sector_info:any;
  financials:any;
  parameter:any;

  updates_form: any;
  months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    milestones = [
        {
        name: 'Needs assessment',
        complete: 'true'
        },
        {
        name: 'Financial palnning and management',
        complete: true
        },
        {
        name: 'Business model innovation',
        complete: false
        },
        {
        name: 'unlimitted personalsized support',
        complete: true
        },
        {
        name: 'Success fee',
        complete: true
        }
    ];

  constructor(
    public formBuilder: FormBuilder,
    public route: ActivatedRoute,
    public router: Router,
    public modalService: BsModalService,
    public businessServices: BizService,
    public session: SessionService,
    public spinnerService: Ng4LoadingSpinnerService) {
    
  }

  ngOnInit() {
      this.bsConfig = Object.assign({}, { minMode : this.minMode  });
      this.parameter = this.route.params.subscribe(params => {
          this.business_id = +params['id'];
          this.getbusiness(params['id']);
      });
  }

  

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  getbusiness(biz_id) {
      this.businessServices.fetch_abusiness(biz_id).subscribe(data => {
          this.business_data = data;
          this.biznes  = data['business_info'];
          this.sector_info= JSON.parse(this.biznes.sectors)
          this.financials = data['financials']
          console.log(this.business_data);
          this.dailyupdates = data['daily_updates'];
          this.draw();
          console.log(this.dailyupdates);
          
      });
  }

  ngOnDestroy() {
      this.parameter.unsubscribe();
  }
  draw() {
    const chart = new Chart({
      chart: {
        type: 'column'
    },
    title: {
        text: 'Revenue vs Meeting expenses'
    },
    xAxis: {
        categories:this.months
    },
    credits: {
        enabled: false
    },
    series: this.dailyupdates.revenue
  });
    
    const linechart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 4, 6]
      }
      
    ]
    });



  const mline = new Chart({
    title: {
      text: 'Employees vs Female employees'
  },

  yAxis: {
      title: {
          text: 'Number of Employees'
      }
  },
  series: this.dailyupdates.employees,
});

let piechart = new Chart({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Market size estimation'
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: false
        },
        showInLegend: true
    }
},
series: [{
    name: 'Market sixe',
    
    data: [{
        name: 'current market',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Potential market',
        y: 11.84
    }, {
        name: 'Current market',
        y: 10.85
    }]
}]
});  
    this.chart = chart;
    this.piechart = piechart;
    this.mline = mline;
    this.linechart= linechart;
    chart.ref$.subscribe(console.log);
  }

}

