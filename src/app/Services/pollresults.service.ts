import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Common/Constants';
import { Result } from '../Common/Result';
import { Vote } from '../Common/Vote';


@Injectable({
  providedIn: 'root'
})
export class PollresultsService {

  constructor(private http:HttpClient) { }
  GetResults(id:number):Observable<Result>
  {
    let votes=this.http.get<Result>(baseUrl+'/api/poll/results/'+id);
    votes.subscribe();
    return votes;
  }
}
