import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  logout(){
    alert(89)
  }

  go_to_profile(){
    this.router.navigate(['profile']);
  }

}
