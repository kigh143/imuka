import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BizService } from 'src/app/provider/biz.service';


@Component({
  selector: 'app-joinprog',
  templateUrl: './joinprog.component.html',
  styleUrls: ['./joinprog.component.scss']
})
export class JoinprogComponent implements OnInit {

  business_id: string;
  prog_selected: string;
  business: any;
  package: any;

  // applying ...
  uniqueness: any;
  turn_over: any;
  business_plan: any;
  challenges: any;
  expectations: any;
  investiment_type: string;
  fund_purpose: any;
  amount_required: any;

  constructor( public route: ActivatedRoute, public router: Router, public businessService: BizService ) {
    this.route.params.subscribe(params => {
      this.business_id  = params['id'];
      this.prog_selected  = params['type'];
      this.getbusiness(this.business_id);
      this.package = this.businessService.imuka_programs()[this.prog_selected];
    });
  }

  ngOnInit() {
  }

  getbusiness( business_id ) {
      this.businessService.fetch_abusiness(business_id).subscribe( business => {
        this.business = business.business_info;
      });
  }

  apply() {
    const application  = {
      uniqueness: JSON.stringify(this.uniqueness),
      turn_over: this.turn_over,
      business_plan: this.business_plan,
      challenges: JSON.stringify(this.challenges),
      expectations: JSON.stringify(this.expectations),
      investiment_type: this.investiment_type,
      fund_purpose: this.fund_purpose,
      amount_required: this.amount_required,
      prog_type: this.package['name'],
      business_id: this.business_id
    };
    
    this.businessService.apply_for_program(application).subscribe( data => {
        console.log( data );
        this.router.navigate(['business', this.business_id]);
    });
  }

}
