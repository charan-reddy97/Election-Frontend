import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../Services/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  firstname:string='';
  lastname:string='';
  address:string ='';
  aadhar:number=0;
  gender:string='';
  dob:number=0;
  electionnumber:number=0;
  photo:string=''
  age:number=0;
  experience:number=0;
  userid:any=0

  constructor(private candidateservice:CandidateService) { }

  ngOnInit(): void {
  }
  AddCandidate():void
  {
    this.candidateservice.AddCandidate(this.firstname,this.lastname,this.address,this.aadhar,this.gender,this.dob,this.electionnumber,this.photo,this.age,this.experience,this.userid);
    alert("Candidate registration is successfull");
  }

}
