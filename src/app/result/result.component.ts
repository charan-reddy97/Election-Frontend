import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../Common/Result';
import { Vote } from '../Common/Vote';
import { PollresultsService } from '../Services/pollresults.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  id:number=0;
  Results:Result[]|any
  constructor(private pollservice:PollresultsService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(p => { this.id = p["id"]})
   let respone= this.pollservice.GetResults(this.id);
    respone.subscribe(d=>d=this.Results)
  }

}
