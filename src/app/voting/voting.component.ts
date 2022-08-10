import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { Candidate } from '../Common/Candidate';
import { Election } from '../Common/Election';
import { CandidateService } from '../Services/candidate.service';
import { LoginService } from '../Services/login.service';
import { VoteService } from '../Services/vote.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  Votedusers:number[]|any;
  candidates:Candidate[]|undefined;
 
  id:number=0;
  voteid:any;
  //candidateId:number=0;
  electionId:number=0;

  constructor(private candidateservice:CandidateService,
              private route:ActivatedRoute,
              private loginservice:LoginService,
              private voteservice:VoteService) { }

  ngOnInit(): void {
   let Id= this.route.params.subscribe(p => { this.id = p["id"]})
    let response=this.candidateservice.GetCandidates(this.id);
   response.subscribe(d=>this.candidates=d.candidates);
   
  } 
  OnClick(candidateId:number):void
  {
    let userid=this.loginservice.getToken()?.profile?.id;
    this.voteservice.FindVoter(userid).subscribe(d=>d.VoterId=this.voteid);
    //let candidateId=document.getElementById("userid");
    if(this.voteid==null)
    {
      this.voteservice.AddVoter(userid,candidateId,this.id)
      alert("Your vote has been recorded")
    }
    else
     alert("You have already casted your vote ")
  }
  
  
  
    
  

}
