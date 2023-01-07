import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login} from 'src/app/shared/login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //declaare variable
  isLogged:boolean=false;


  constructor(private httpClient:HttpClient) { }

  //validate emailId and Password for Authorization and Authontication
  //Authorize return token with role and Password
  public loginVerify(loginUser: Login){
    //calling RESTAPI by passing emailid and password
    console.log("Attempt authentication and authorize");
    return this.httpClient.post(environment.apiUrl+"/api/login",loginUser);
  }

  //SignOut
  public logOut():void{
    localStorage.removeItem("USER_NAME");
    localStorage.removeItem("ACCESS_ROLE");
    localStorage.removeItem("JWT_TOKEN");
    sessionStorage.removeItem("USER_NAME");
  }
}
