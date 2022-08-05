import { Component, OnInit } from '@angular/core';
import { Election } from '../Common/Election';
import { ElectionsService } from '../Services/elections.service';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {
  elections:Election[]=[]
  constructor(private electionservice:ElectionsService) { }

  ngOnInit(): void {  
    let respone=this.electionservice.FetchElection();
    respone.subscribe(d=>this.elections=d);
  }

}
