import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService:LoginService ,private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
       let roleId = this.loginService.getToken()?.profile?.role;
     console.debug(roleId);
      if(roleId)
      {
        return roleId>0;
        
      }
      else
      alert("You are not authorized to create a poll")
        return false;

  }
  
}
