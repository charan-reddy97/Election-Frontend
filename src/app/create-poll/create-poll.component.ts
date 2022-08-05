import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Election } from '../Common/Election';
import { ElectionsService } from '../Services/elections.service';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.css']
})
export class CreatePollComponent implements OnInit {

  elections:Election[]=[]
  constructor(private electionservice:ElectionsService,private route:Router) { }
  electionnumber:number=0;
  position:string='';
  description:string='';
  ngOnInit(): void {
  }
  OnClick():void
  {
    this.electionservice.AddElection(this.electionnumber,this.position,this.description);
    alert("Poll Created");
    //this.route.navigateByUrl('/elections')
    //let respone=this.electionservice.FetchElection();
    //respone.subscribe(d=>this.elections=d);
    
  }
  

}
