import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../provider/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any;
  header: string;
  constructor( public router: Router,  public sessionService: SessionService) { }

  ngOnInit() {
    const data = this.sessionService.getuser();
    this.user = data;
  }

  navigate_to(page) {
    this.router.navigate([page]);
  }

}
