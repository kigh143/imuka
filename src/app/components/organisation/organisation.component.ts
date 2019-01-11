import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  active_index = 0;
  org_menu = [
    {name:"About", icon:"fa fa-sitemap", isactive:true},
    {name:"Events", icon:"fa fa-calendar", isactive:false},
    {name:"Opportunities", icon:"fa fa-globe", isactive:false},
    {name:"Group", icon:"fa fa-users", isactive:false},
    {name:"Make Inquiry", icon:"fa fa-envelope", isactive:false},
  ];

  events = [1,2,3,4,5,6]
  opportunities = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit() {
  }

  show_page( item, i ){
    let len  = this.org_menu.length;
    for(let counter=0; counter<len; counter++){
        if( this.org_menu[counter].name === item.name ){
          this.org_menu[counter].isactive = true;
          this.active_index = i;
        }else{
          this.org_menu[counter].isactive = false;
        }
    }
  }

}
