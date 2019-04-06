import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BizService } from 'src/app/provider/biz.service';
import { ActivatedRoute } from '@angular/router';

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
  factor1;
  factor2;
  factor3;
  competitors_info=[];
  competitors = false;
  competitor1 = false;
  competitor2 = false;
  competitive_advantage;
  comp_factor:{};
  competitor1_info={
    "name":"owner",
    "comparison":{"factor1":"", "factor2":"", "factor3":""}
  }
  competitor2_info={
    "name":"",
    "comparison":{"factor1":"", "factor2":"", "factor3":""}
  }
  competitor3_info={
    "name":"",
    "comparison":{"factor1":"", "factor2":"", "factor3":""}
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
      ans: 'Female engagement in employment/ gender equality'
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
      ans: 'It provides cheaper and affordable products/ services to the people'
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
      ans: ' it improves waste management within the area/ reduces pollution'
    },
    { selected: false, ans: ' it promotes recycling of the waste/ bi products' }
  ];

  constructor(
    private modalService: BsModalService,
    public route: ActivatedRoute,
    public businessService: BizService) {
      this.route.params.subscribe(params => {
        this.business_id = +params['id'];
        this.fetch_pitcbook_data(this.business_id);
      });
    
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
    });
  }

  save_changes() {
    this.businessService.edit_pitchbook(this.pitch).subscribe( data => {
      
    });
    this.fetch_pitcbook_data(this.business_id);
   
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
      this.competitors_info.push(this.competitor3_info)
     this.pitch.competition= this.competitors_info;
      console.log(this.pitch.competition);
      
      this.save_changes();
      
    }
    
  }


  addtoobject(content){
    
  }

}
