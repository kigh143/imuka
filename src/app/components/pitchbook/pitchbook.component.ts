import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BizService } from 'src/app/provider/biz.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'angular-highcharts';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-pitchbook',
  templateUrl: './pitchbook.component.html',
  styleUrls: ['./pitchbook.component.scss']
})

export class PitchbookComponent {

  modalRef: BsModalRef;
  business: any;
  business_id: any;
  pitch: any;
  edit = false;
  products: any;
  comp_factors={"factor":""};
  factors:boolean= true;
  factor1:number;
  factor1_grade=[];
  factor2_grade=[];
  factor3_grade=[];
  factor2:number;
  factor3:number;
  competition:any;
  barchart;
  chart: Chart;
  months;
  mline;
  sdgs;
  piechart;
  enviroment_impact;
  social_impact
  economic_impacts;
  competitors_name=[];
  competitors_info=[];
  competitors = false;
  competitor1 = false;
  competitor2 = false;
  competitive_advantage;
  competitor3 = false;
  comp_factor:{};
  competitor1_info={
    "name":"owner",
    comparison:{factor1:1, factor2:1, factor3:1}
  }
  competitor2_info={
    "name":"",
    comparison:{factor1:1, factor2:1, factor3:1}
  }
  competitor3_info={
    "name":"",
    comparison:{factor1:1, factor2:1, factor3:1}
  }
  competitor4_info={
    "name":"",
    comparison:{factor1:1, factor2:1, factor3:1}
  }


  social_impacts = [
    { selected: false, ans: 'Security' },
    { selected: false, ans: 'Self esteem' },
    { selected: false, ans: 'Educational improvement' },
    { selected: false, ans: 'It promotes girl education' },
    {
      selected: false,
      ans: 'It promotes independence of the people especially women'
    },
    { selected: false, ans: 'Health improvement' },
    { selected: false, ans: 'Food security' },
    { selected: false, ans: 'Reduce unemployment through job creation' },
    {
      selected: false,
      ans: 'Female engagement in employment or gender equality'
    },
    {
      selected: false,
      ans: 'It improves the living standards and well being of the people'
    },
    { selected: false, ans: 'Reduces involvement of people in crimes' },
    { selected: false, ans: 'Reduces idleness' },
    { selected: false, ans: 'Improves the social infrastructure of the area' },
    { selected: false, ans: 'It extends social services to the people' },
    {
      selected: false,
      ans: 'It promotes justice and fairness with in the people'
    },
    { selected: false, ans: 'It improves the confidence of the people' },
    {
      selected: false,
      ans: 'It improves the nutritional balance of the food '
    },
    {
      selected: false,
      ans:
        'It promotes technological improvement (such as use of computer and merchinery) and innovation'
    }
  ];

  economic_impact = [
    { selected: false, ans: 'It provides jobs to the people' },
    { selected: false, ans: 'It increases the incomes of the people' },
    {
      selected: false,
      ans: 'Improvement in the standards of living of the people'
    },
    {
      selected: false,
      ans: 'It provides cheaper and affordable products or services to the people'
    }
  ];

  env_impact = [
    {
      selected: false,
      ans: ' It encourages afforestation and preservation of plantations'
    },
    {
      selected: false,
      ans:
        ' it encourages preservation of swamps and reduce environment degredation'
    },
    {
      selected: false,
      ans: ' it improves waste management within the area or reduces pollution'
    },
    { selected: false, ans: ' it promotes recycling of the waste or bi products' }
  ];

  constructor(
    private modalService: BsModalService,
    public route: ActivatedRoute,
    
    public businessService: BizService) {
      this.route.params.subscribe(params => {
        this.business_id = +params['id'];
        this.fetch_pitcbook_data(this.business_id);
      });
  this.months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
   this.draw();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  fetch_pitcbook_data( business_id ) {
    this.businessService.fetch_abusiness( business_id ).subscribe( data => {
        this.business = data.business_info;
        this.pitch  = data.pitch;
        console.log(this.pitch);
        this.products  = data.products;
        this.edit = false;
        this.enviroment_impact = JSON.parse(this.pitch.env_impact);
        this.social_impact=JSON.parse(this.pitch.social_impact);
        this.economic_impacts=JSON.parse(this.pitch.economic_impact);
        this.sdgs = JSON.parse(this.pitch.impact_areas)
        console.log(this.economic_impacts);
    });
  }

  save_changes() {
    this.pitch.economic_impact = JSON.stringify(this.pitch.economic_impact)
    this.pitch.impact_areas= JSON.stringify(this.pitch.impact_areas);
    this.pitch.social_impact = JSON.stringify(this.pitch.social_impact)
    this.pitch.env_impact=JSON.stringify(this.pitch.env_impact)
    this.businessService.edit_pitchbook(this.pitch).subscribe( data => {
      
    });
    this.fetch_pitcbook_data(this.business_id);
    this.draw();
  }

  edit_mode() {
      this.edit = true;
  }
 
    editcompetitive(){
    if(this.factors){
      this.competitors = true;
      this.factors = false;
      this.competitor1 = false;
      this.competitor2 = false;
      console.log(this.comp_factors)
      
     
    }
    else if(this.competitors){
      
      this.competitor1 = true;
      this.competitor2 = false;
      this.factors = false;
      this.competitors = false;
     
      this.competitors_info.push(this.competitor1_info)
      
    }
    else if(this.competitor1){
      this.competitor2 = true;
      this.competitor1 = false;
      this.factors = false;
      this.competitors = false;
      this.competitors_info.push(this.competitor2_info)
      console.log(this.competitor2_info);
    }
    else if(this.competitor2){
      this.competitor3 = true;
      this.competitor2 = false;
      this.competitor1 = false;
      this.factors = false;
      this.competitors = false;
      this.competitors_info.push(this.competitor3_info)
      console.log(this.competitor3_info);
    }
    else if(this.competitor3){
      this.competitors_info.push(this.competitor4_info)
      this.pitch.competition= this.competitors_info;
      console.log(this.pitch.competition);
      
      
      
    }
    
  }

  draw() {
    this.competitors_info.forEach(data=>{
       this.competitors_name.push(data.name);
       this.factor1_grade.push(parseInt(data.comparison.factor1));
       this.factor2_grade.push(parseInt(data.comparison.factor2));
       this.factor3_grade.push(parseInt(data.comparison.factor3)); 
    });
    
    console.log(this.factor1_grade);
    

  
const barchart=new Chart({
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Competitive Advantage'
  },
  subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },
  xAxis: {
      categories: this.competitors_name,
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Factor ranges',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' millions'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: 0,
      y: 10,
      floating: true,
      borderWidth: 1,
      backgroundColor: (('#eee' && '#eee') || '#FFFFFF'),
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: this.comp_factors[0],
      data: this.factor1_grade
  }, {
      name:  this.comp_factors[1],
      data: this.factor2_grade
  }, {
      name:  this.comp_factors[2],
      data: this.factor3_grade
  }]
});
const piechart=new Chart( {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Browser market shares in January, 2018'
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
      name: 'Brands',
      data: [{
          name: 'Available',
          y: 61.41,
          sliced: true,
          selected: true
      }, {
          name: 'Potential',
          y: 11.84
      }, {
          name: 'Served',
          y: 10.85
      }]
  }]
});
    this.piechart = piechart;
    this.barchart = barchart;
//chart.ref$.subscribe(console.log);
  
   
  }
 

}
