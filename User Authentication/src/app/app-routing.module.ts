import { AboutComponent } from './../about/about.component';
import { AuthGuard } from './../Guard/auth.guard';
import { LoginComponent } from './../login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "src/home/home.component";
import { RegisterComponent } from "src/register/register.component";


const routes: Routes = [
  {path:'' , component : LoginComponent} ,
  {path:'register' , component : RegisterComponent} ,
  {path:'home' , component : HomeComponent , } ,
  {path:'login' , component : LoginComponent} ,
  {path:'about' , component : AboutComponent  } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
