import { Component, OnInit } from '@angular/core';
import {BizService} from '../../provider/biz.service';
@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
  contracts;
  constructor(public businessservice: BizService) { }

  ngOnInit() {
    this.getcontracts();
  }
  getcontracts(){
   this.businessservice.getcontracts().subscribe(data=>{
     this.contracts = data;
     console.log(this.contracts);
   })
  }

}
