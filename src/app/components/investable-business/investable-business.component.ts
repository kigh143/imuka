
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
  piechart2:any;
  sector_info:any;
  financials:any;
  parameter:any;
  competitive:any;

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
    social_impacts = [
      { selected: false, ans: "Security" },
      { selected: false, ans: "Self esteem" },
      { selected: false, ans: "Educational improvement" },
      { selected: false, ans: "It promotes girl education" },
      {
        selected: false,
        ans: "It promotes independence of the people especially women"
      },
      { selected: false, ans: "Health improvement" },
      { selected: false, ans: "Food security" },
      { selected: false, ans: "Reduce unemployment through job creation" },
      {
        selected: false,
        ans: "Female engagement in employment/ gender equality"
      },
      {
        selected: false,
        ans: "It improves the living standards and well being of the people"
      },
      { selected: false, ans: "Reduces involvement of people in crimes" },
      { selected: false, ans: "Reduces idleness" },
      { selected: false, ans: "Improves the social infrastructure of the area" },
      { selected: false, ans: "It extends social services to the people" },
      {
        selected: false,
        ans: "It promotes justice and fairness with in the people"
      },
      { selected: false, ans: "It improves the confidence of the people" },
      {
        selected: false,
        ans: "It improves the nutritional balance of the food "
      },
      {
        selected: false,
        ans:
          "It promotes technological improvement (such as use of computer and merchinery) and innovation"
      }
    ];
  
    economic_impact = [
      { selected: false, ans: "It provides jobs to the people" },
      { selected: false, ans: "It increases the incomes of the people" },
      {
        selected: false,
        ans: "Improvement in the standards of living of the people"
      },
      {
        selected: false,
        ans: "It provides cheaper and affordable products/ services to the people"
      }
    ];
  
    env_impact = [
      {
        selected: false,
        ans: " It encourages afforestation and preservation of plantations"
      },
      {
        selected: false,
        ans:
          " it encourages preservation of swamps and reduce environment degredation"
      },
      {
        selected: false,
        ans: " it improves waste management within the area/ reduces pollution"
      },
      { selected: false, ans: " it promotes recycling of the waste/ bi products" }
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
    name: 'Market size',
    
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
let piechart2 = new Chart({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
},
title: {
    text: 'Investment need representation'
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
    name: 'Market size',
    
    data: [{
        name: 'marketing',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Stock',
        y: 50.84
    }, {
        name: 'operations',
        y: 10.85
    },
    {
      name: 'Machinery',
      y: 40.85
  }]
}]
}); 

let competitive = new Chart({
  title: {
    text: 'Feclabs Vs Competitors'
},



yAxis: {
    title: {
        text: 'competitve advantage'
    }
},
legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
},



series: [{
    name: 'Feclabs',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
}, {
    name: 'Competitor1',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
}, {
    name: 'Competitor1',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
}, {
    name: 'Competitor1',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
    name: 'Others',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
}],


});
    this.chart = chart;
    this.piechart = piechart;
    this.piechart2 = piechart2;
    this.competitive = competitive;
    this.mline = mline;
    this.linechart= linechart;
    chart.ref$.subscribe(console.log);
  }

}

