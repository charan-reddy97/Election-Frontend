import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent implements OnInit {
name='';
  constructor(private loginservice:LoginService) { }

  ngOnInit(): void
   {
     this.name=this.loginservice.getToken()?.profile?.firstName
  }

}
