import { Component, Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ServiceComponent {
  
  constructor(){}

  user = {username:"" , password:""};

  private username = new Subject<string>();
  usernameVar$ = this.username.asObservable();

  private password = new Subject<string>();
  passwordVar$ = this.password.asObservable();


  sendUsername(username){
      this.username.next(username);
      console.log("sendUsername called");
  }

  sendPassword(password){
      this.password.next(password);
      console.log("sendPassword called");
  }

}