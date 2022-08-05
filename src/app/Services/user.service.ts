import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../Common/Constants';
import { User } from '../Common/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  AddUser(firstname:string,
          lastname:string,
          gender:string,
          dob:number,
          email:string,
          password:string,
          aadhar:number):Observable<User>
          {
            let request=this.http.post<User>(baseUrl+'/api/user',{
              FirstName:firstname,
              Lastname:lastname,
              Gender:gender,
              DOB:dob,
              Email:email,
              Password:password,
              Aadhar:aadhar
            });
            request.subscribe();
            return request;
          }
}
