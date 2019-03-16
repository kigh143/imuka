import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/provider/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( public router: Router, public sessionService: SessionService ) { }

  ngOnInit() {
  }

  logout() {
    this.sessionService.logout();
    this.router.navigate(['/login']);
  }

}
