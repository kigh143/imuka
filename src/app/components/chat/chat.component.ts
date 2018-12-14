import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat_list = [
    {name:"katende Ivan", type:"Investor", online:true, user_id:1 },
    {name:"Galiwango Hakim", type:"Investor", online:true, user_id:2 },
    {name:"Bivian Virungi", type:"Enterprener", online:true, user_id:3 },
    {name:"Danam Avid", type:"Investor", online:true, user_id:4 }
  ];

  active_chat = null;
  constructor( public route : ActivatedRoute, public router: Router) { 

    let index = this.route.snapshot.paramMap.get('id');
    console.log(index);
    if( index !== null){
      this.active_chat = this.chat_list[ parseInt(index)];
    }
  }

  ngOnInit() {

  }



}
