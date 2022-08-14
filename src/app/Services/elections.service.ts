import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../Common/Candidate';
import { baseUrl } from '../Common/Constants';
import { Election } from '../Common/Election';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {
 id:number=0;
  constructor(private http:HttpClient) { }
  FetchElection():Observable<Array<Election>>
  {
    let elections=this.http.get<Array<Election>>(baseUrl+'/api/poll');
    elections.subscribe();
    return elections;
  }
  AddElection(electionnumber:number,
              position:string,
              description:string
              ):Observable<Election>
  {
   
    let request=this.http.post<Election>(baseUrl+'/api/poll',{ 
      ElectionNumber:electionnumber,
      Position:position,
      Description:description});
    request.subscribe();
    return request;

  }
  //FetchElectionById():Observable<Candidate>
  //{
    //let election=this.http.get<Array<any>(baseUrl+'/api/poll/byid/'+this.id);
    //election.su
  //}
}
