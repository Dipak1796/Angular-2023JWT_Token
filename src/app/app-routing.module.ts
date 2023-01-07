import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent , canActivate:[AuthGuard], data:{role:'1'}},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard], data:{role:'2'}},
  {path:'login',component:LoginComponent},
  {path:'news',component:NewsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
