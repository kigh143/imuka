import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input('filterImuka')filterImuka: any[];
  filter_info =[];
  isFirstOpen = true;
  lastAction:any;
  item:any;
  i:any;
  filter={
    name:"",
    options:[]
  }
  constructor() {

    
   }

  ngOnInit() {
    this.filter_info= this.filterImuka;
    console.log(this.filter_info);
   
  }
  onChange(eve, main) {
   
  //  item.checked = !item.checked;
    //  let filter_name= main.name;
    //  this.filter.name=filter_name;
    //  this.filter.options=eve.target.value;
   
  // console.log(eve.target.value);
  //  console.log(main.name);
  //  console.log(this.filter)
    //console.log(JSON.stringify(option.value));
    //console.log(JSON.stringify(item));

}



}
