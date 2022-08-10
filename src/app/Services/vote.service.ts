import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Common/Constants';
import { Vote } from '../Common/Vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http:HttpClient) { }

  //Add Voter
  AddVoter(voterId:any,candidateId:number,electionId:number)//:Observable<Vote>
  {
    let request=this.http.post<Vote>(baseUrl+'/api/vote',
    {
      VoterId:voterId,
      CandidateId:candidateId,
      ElectionId:electionId
     });
     request.subscribe();
    // return request;
  }
  //Find Voter
  FindVoter(Id:any):Observable<Vote>
  {
    let voter=this.http.get<Vote>(baseUrl+'/api/vote/byid/'+Id);
    voter.subscribe();
    return voter;
  }
}
