import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/provider/session.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isClickedShowMenu : boolean = true;
  user:any;

  constructor( public router: Router, public session: SessionService) { }

  ngOnInit() {
 this.user = this.session.getuser();
  }

  go_to_profile(){
    this.router.navigate(['/profile'])
  }
  openMenu(){
    this.isClickedShowMenu = !this.isClickedShowMenu;
    console.log( this.isClickedShowMenu );
  }

}
