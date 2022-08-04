import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';
import { Token } from '../Common/Profile';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private loginservice:LoginService) { }
  email:string='';
  password:string=''
  ngOnInit(): void {
    
  }
  LoginClick():void
  {
    this.loginservice.login(this.email,this.password);
    
    this.route.navigate(['/choice']);    
  }
  
  

}
