import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { Candidate } from '../Common/Candidate';
import { Election } from '../Common/Election';
import { CandidateService } from '../Services/candidate.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  candidates:Candidate[]=[];
 
  id:number=0;
  constructor(private candidateservice:CandidateService,private route:ActivatedRoute) { }

  ngOnInit(): void {
   let Id= this.route.params.subscribe(p => { this.id = p["id"]})
    let response=this.candidateservice.GetCandidates(this.id);
    response.subscribe();
    
  } 

}
