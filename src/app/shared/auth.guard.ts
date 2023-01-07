import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    ):boolean {

      //if false , redirect to login else show the authorized page
      //check role: currentRole vs expectedRole
      //            localStorage   app.routing.module
      const expectedRole = next.data.role;
      const currentRole= localStorage.getItem("ACCESS_ROLE");

      //check condition
      if(currentRole != expectedRole){
        this.router.navigateByUrl('login');
        return false;
      }
    return true;
  }
  
}
