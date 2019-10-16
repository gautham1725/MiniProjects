import { GuardService } from 'src/Guard/guard.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})

export class AboutComponent {

  title = 'UserAuthentication';
  constructor( private router : Router , private guard : GuardService){}

  logout(){
    this.guard.getLoggedIn(false);
    this.router.navigate(['/login']);
    window.alert("You're logged out succesfully");
  }

  login(){
    this.router.navigate(['/login']);
  }
  
}
