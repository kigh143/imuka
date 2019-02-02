import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.scss']
})
export class OrgProfileComponent implements OnInit {
  active_index = 0;
  org_menu = [
    {name:"Profile details", icon:"fa fa-sitemap", isactive:true},
    {name:"Events", icon:"fa fa-calendar", isactive:false},
    {name:"Opportunities", icon:"fa fa-globe", isactive:false},
    {name:"Our enterprenuers", icon:"fa fa-users", isactive:false},
    {name:"Inquiries", icon:"fa fa-envelope", isactive:false},
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
