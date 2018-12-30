import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed : boolean = false;
  constructor( public router: Router) { }

  ngOnInit() {
  }

  go_to_profile(){
    this.router.navigate(['/profile'])
  }

}
