import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Election } from '../Common/Election';
import { ElectionsService } from '../Services/elections.service';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {
  elections:Election[]=[]
  id:number=0
  constructor(private electionservice:ElectionsService,private route:Router) { }

  ngOnInit(): void {  
    let respone=this.electionservice.FetchElection();
    respone.subscribe(d=>this.elections=d);
  }
  

}
