import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../Common/Candidate';
import { baseUrl } from '../Common/Constants';
import { Election } from '../Common/Election';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
 // id:number=0;
  constructor(private http:HttpClient) { }
  GetCandidates(Id:number):Observable<Election>
  {
    let candidates=this.http.get<Election>(baseUrl+'/api/poll/byid/'+Id);
    candidates.subscribe();
    return candidates;
  }
  AddCandidate(
                firstname:string,
                lastname:string,
                address:string,
                aadhar:number,
                gender:string,
                dob:number,
                electionnumber:number,
                photo:string,
                age:number,
                experience:number,
                userid:number
                ):Observable<Candidate>
  {
    let request=this.http.post<Candidate>(baseUrl+'/api/candidate',
    {
        FirstName:firstname,
        LastName:lastname,
        Address:address,
        Aadhar:aadhar,
        Gender:gender,
        DOB:dob,
        ElectionNumber:electionnumber,
        Photo:photo,
        Age:age,
        Experience:experience,
        UserId:userid
    });
    request.subscribe();
    return request;
  }
  
}
