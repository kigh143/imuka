import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isClickedShowMenu : boolean = true;

  constructor( public router: Router) { }

  ngOnInit() {
  }

  go_to_profile(){
    this.router.navigate(['/profile'])
  }
  openMenu(){
    this.isClickedShowMenu = !this.isClickedShowMenu;
    console.log( this.isClickedShowMenu );
  }

}
