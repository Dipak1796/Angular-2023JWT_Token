import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoNissan2023JWTApp';
  //declare variable
  isLoggedIn:boolean=false;
  constructor(public loginService:LoginService,
             private router:Router){}//contructer injection

  ngOnInit():void{
    this.isLoggedIn=this.loginService.isLogged;
  }

  //method for logout

  logOut(): void{
    this.router.navigateByUrl('/login');
    this.loginService.logOut();
  }

}
