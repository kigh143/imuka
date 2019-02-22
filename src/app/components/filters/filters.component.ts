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
  constructor() {

    
   }

  ngOnInit() {
    this.filter_info= this.filterImuka;
    console.log(this.filter_info);
  }



}
