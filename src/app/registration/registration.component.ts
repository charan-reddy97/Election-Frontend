import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstname:string='';
  lastname:string='';
  gender:string='';
  dob:number=0;
  aadhar:number=0;
  email:string='';
  password:string='';



  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  AddUser():void
  {
    this.userservice.AddUser(this.firstname,this.lastname,this.gender,this.dob,this.aadhar,this.email,this.password);
    alert("Successfully Registered")
  }
}
