import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BizService } from 'src/app/provider/biz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import { SessionService } from 'src/app/provider/session.service';
@Component({
  selector: 'app-pitchbook',
  templateUrl: './pitchbook.component.html',
  styleUrls: ['./pitchbook.component.scss']
})

export class PitchbookComponent {

  user : any;
  modalRef: BsModalRef;
  business: any;
  business_id: any;
  pitch: any;
  edit = false;
  products: any;
  purpose:any;
  financials:any;
  comp_factors={'factor':''};
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
  enviroment_impact =[];
  social_impact=[];
  message: string;
  economic_impacts = [];
  competitors_name=[];
  competitors_info=[];
  competitors = false;
  competitor1 = false;
  competitor2 = false;
  competitive_advantage;
  competitor3 = false;
  biz_info;
  heading;
  team:any;
  savechanges = false;
  competitions;
  chosenitem = [];
  comp_factor:{};
  competitor1_info={
    'name':'owner',
    comparison:{factor1:1, factor2:1, factor3:1}
  }
  competitor2_info={
    'name':'',
    comparison:{factor1:1, factor2:1, factor3:1}
  }
  competitor3_info={
    'name':'',
    comparison:{factor1:1, factor2:1, factor3:1}
  }
  competitor4_info={
    'name':'',
    comparison:{factor1:1, factor2:1, factor3:1}
  }
 
  social_impacts = [
    'Security' ,
     'Self esteem' ,
     'Educational improvement' ,
    'It promotes girl education' ,
    'It promotes independence of the people especially women'
    ,
     'Health improvement' ,
    'Food security' ,
     'Reduce unemployment through job creation' ,
    'Female engagement in employment or gender equality'
    ,
    
      'It improves the living standards and well being of the people'
    ,
     'Reduces involvement of people in crimes' ,
     'Reduces idleness' ,
     'Improves the social infrastructure of the area' ,
    'It extends social services to the people' ,
    'It promotes justice and fairness with in the people'
    ,
     'It improves the confidence of the people' ,
    'It improves the nutritional balance of the food '
    ,
    
        'It promotes technological improvement (such as use of computer and merchinery) and innovation'
    
  ];

  economic_impact = [
     'It provides jobs to the people' ,

     'It increases the incomes of the people' ,
    'Improvement in the standards of living of the people'
    ,
    
     'It provides cheaper and affordable products or services to the people'
    
  ];

  env_impact = [
     ' It encourages afforestation and preservation of plantations'
    ,
    
        ' it encourages preservation of swamps and reduce environment degredation'
    ,
    
      
       ' it improves waste management within the area or reduces pollution'
    ,
    ' it promotes recycling of the waste or bi products' 
  ];
  
  
  sdg = [
    'No Poverty',
    'Zero Hunger',
    'Good Health and Well-being',
    'Quality Education',
    'Gender Equality',
   'Clean Water and Sanitation',
    'Affordable and Clean Energy',
    'Decent Work and Economic Growth',
    'Industry, Innovation and Infrastructure',
    'Reduced Inequality',
    'Sustainable Cities and Communitie',
    'Responsible Consumption and Production',
    'Climate Action',
    'Life Below Water',
   'Life on Land',
    'Peace and Justice Strong Institutions',
    
     'Partnerships to achieve the Goal'
  ];

  investimentNeed = {
    marketing: '',
    operations: '',
    machinery: '',
    stock: '',
    raw_material: '',
    total_needed:0,
    investiment_type:''
  };
  servedmkt;
  potential;
  socialSettings;
  constructor(
    private modalService: BsModalService,
    public route: ActivatedRoute,
    private router : Router,
    public session: SessionService,
    public businessService: BizService) {
      this.route.params.subscribe(params => {
        this.business_id = +params['id'];
        this.fetch_pitcbook_data(this.business_id);
        console.log(this.business_id);
      });
  this.months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  
   this.user = this.session.getuser();
   
  
  this.socialSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'ans',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };
  }
 
  onSelected(item: any) {
   
    this.pitch.social_impact= this.social_impact;
    
  }

  addsdg(item: any){
    
    this.pitch.sdgs= this.sdgs;

  }
  addenviroment(item: any){
   
    this.pitch.env_impact = this.enviroment_impact;
    console.log(this.pitch.env_impact);
  }
  addeconomic(item: any){
    this.pitch.economic_impact = this.economic_impacts;
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  openModal(template: TemplateRef<any>, event) {
    this.modalRef = this.modalService.show(template);
   
    this.onchanged_value(event)
  }

  fetch_pitcbook_data(business_id) {
    this.businessService.fetch_abusiness(business_id ).subscribe( data => {
      
        this.business = data.business_info;
        this.products  = data.products;
        this.financials = data.financials
        this.pitch  = data.pitch;
        this.competitions = JSON.parse(this.pitch.competition);
        this.team = data.pitch.team;
    
        this.edit = false;
       

        this.getTotalNeed(this.investimentNeed);
        this.social_impact = JSON.parse(this.pitch.social_impact);
        this.sdgs = JSON.parse(this.pitch.sdgs);
        this.economic_impacts = JSON.parse(this.pitch.economic_impact);
        this.enviroment_impact = JSON.parse(this.pitch.enviroment_impact)
       console.log(this.social_impact);
        this.draw(this.competitions);
        console.log(this.pitch);
        this.servedmkt = ((this.pitch.served)/this.pitch.Available)*100;
        this.potential = 50;
        //this.remaining = ((this.pitch.remaiing)/this.pitch.Available)*100;
      
    });
  }
   
   
  getTotalNeed(investimentNeed){
      const {  marketing, operations, machinery, stock, raw_material } = investimentNeed;
      if(marketing){
        this.investimentNeed.total_needed = parseInt(marketing) + parseInt(operations) + parseInt(machinery) + parseInt(stock) +parseInt(raw_material);

      }
  }

  save_changes() {
   console.log(this.pitch);
   let newdata = this.pitch;
   this.pitch.social_impact = JSON.stringify(this.pitch.social_impact);
   this.pitch.env_impact = JSON.stringify(this.pitch.env_impact);
   this.pitch.sdgs = JSON.stringify(this.pitch.sdgs);
   this.pitch.economic_impact = JSON.stringify(this.pitch.economic_impact)
   console.log(newdata);
    this.businessService.edit_pitchbook(newdata).subscribe( data => {
      console.log(newdata);
      if (data.flag){
        this.fetch_pitcbook_data(this.business_id);
        this.draw(this.competitors_info);
      }
    });
   
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
      this.savechanges = true
      this.competitors_info.push(this.competitor4_info)
      this.pitch.competition= this.competitors_info;
      console.log(this.pitch.competition);



    }
  }

  draw(competitors) {
       competitors.forEach(data=>{
       this.competitors_name.push(data.name);
       this.factor1_grade.push(parseInt(data.comparison.factor1));
       this.factor2_grade.push(parseInt(data.comparison.factor2));
       this.factor3_grade.push(parseInt(data.comparison.factor3));
    });
  
    console.log(this.competitors_info);
    


const barchart=new Chart({
  chart: {
      type: 'bar'
  },
  title: {
      text: 'Competitive Advantage'
  },
  subtitle: {
      text: "Source: <a href='https://en.wikipedia.org/wiki/World_population'>imuka</a>"
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
// const doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
//   type: 'doughnut',
//   data: {
//     labels: labels,
//     datasets: [
//       {
//         label: '# of Votes',
//         data: data,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)'
//         ],
//         hoverBackgroundColor: [
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56',
//           '#FF6384',
//           '#36A2EB',
//           '#FFCE56'
//         ]
//       }
//     ]
//   }
// });
const piechart = new Chart( {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Market size and share'
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
          y: 56,
          sliced: true,
          selected: true
      }, {
          name: 'Potential',
          y: 36
      }, {
          name: 'Served',
          y: 24
      }]
  }]
});
    this.piechart = piechart;
    this.barchart = barchart;

  }
goback(){
  if(this.user.user_type === 'investor'){
    this.router.navigate(['user_business/'+this.business_id ])
  }
  else{
    if(this.user.user_type === 'entrepreneur'){
    this.router.navigate(['business/'+this.business_id ])
  }
}
  
}

onchanged_value(event) {
  
 this.message= '';
 this.heading = event.target.value + 'Definition';
  if (event.target.value === 'Equity Financing') {
    this.message =
      'Equity financing is the process of raising capital through the sale of shares in an enterprise';

  } else if (event.target.value === 'Debt Financing') {
    this.message =
      'When a company borrows money to be paid back at a future date with interest it is known as debt financing';
  } else if (event.target.value === 'Mezzanine financing') {
    this.message =
      'Mezzanine financing is a hybrid of debt and equity financing that gives the lender the right to convert to an equity interest in the company in case of default, generally after venture capital companies and other senior lenders are paid. ';
  } else if (event.target.value === 'Islamic Finance') {
    this.message =
      'The main principle of Islamic finance is its adherence to interest or riba-free financial transactions,while other principles are: prohibition of fixed return, profit-and-loss sharing and hence risk sharing  participatory financing; prohibition of gharar (uncertainty), speculation and gambling;money not having any inherent value in itself; and also equity-based financing.';
  }
  else if (event.target.value === 'Open to discussion') {
    this.message =
      'We help you make the best choice';
  }

}

}
