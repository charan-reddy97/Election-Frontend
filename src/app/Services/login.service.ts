import { HttpClient } from '@angular/common/http';
//import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from '../Common/Constants';
import { Token } from '../Common/Profile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private route:Router) { }
  login(email:string, password:string):boolean
  {
    let request=this.http.post<Token>(baseUrl+'/api/login',{
      Email:email,
      Password:password
    });
    request.subscribe(d=>{localStorage.setItem("Token",JSON.stringify(d));
    return true;
  });
    return false;
    
  }
  getToken() : Token|undefined
  {
      let token:Token|undefined;

      let tokenString = localStorage.getItem("Token")?.toString();
      if(tokenString)
        token = JSON.parse(tokenString);

      return token;
  }

}
