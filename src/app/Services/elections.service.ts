import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Common/Constants';
import { Election } from '../Common/Election';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http:HttpClient) { }
  FetchElection():Observable<Array<Election>>
  {
    let elections=this.http.get<Array<Election>>(baseUrl+'/api/poll');
    elections.subscribe();
    return elections;
  }
  AddElection(electionnumber:number,position:string,description:string):Observable<Election>
  {
   
    let request=this.http.post<Election>(baseUrl+'/api/poll',{ 
      ElectionNumber:electionnumber,
      Position:position,
      Description:description});
    request.subscribe();
    return request;

  }
}
