import { RegisterComponent } from './../register/register.component';
import { ServiceComponent } from './../service/service.component';
import { AboutComponent } from './../about/about.component';
import { GuardService } from 'src/Guard/guard.service';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthGuard } from 'src/Guard/auth.guard';
import { HomeComponent } from './../home/home.component';
import { LoginComponent } from './../login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent , LoginComponent , HomeComponent , AboutComponent , RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard , Validators , GuardService , ServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
