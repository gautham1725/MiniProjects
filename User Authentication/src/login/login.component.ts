import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { GuardService } from "src/Guard/guard.service";
import { AuthGuard } from "src/Guard/auth.guard";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder , Validators } from '@angular/forms';
import { ServiceComponent } from "src/service/service.component";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

      constructor( private router : Router , private http:HttpClient, private fb : FormBuilder , 
      private service : ServiceComponent , private auth : GuardService ){ }
        
      employeeForm : FormGroup;
      usernames:any=['gowtham','akash','rohit'];
      passwords:any=['go23','ak05','ro45'];
      count:number = 0;

      ngOnInit() : void {

        this.employeeForm = this.fb.group({
          username : ['' , Validators.required],
          password : ['' , Validators.required]
        })
      }

      submit(){

            this.service.usernameVar$.subscribe(
          username => {
              console.log("login component called");
              console.log(username);
              this.usernames.push(username);
              console.log(this.usernames+' '+this.passwords);
            }
        )

        this.service.passwordVar$.subscribe(
          password => {
              console.log("login component called");
              console.log(password);
              this.passwords.push(password);
              console.log(this.usernames+' '+this.passwords);
            }
        )
        
            console.log("Saved Form" + JSON.stringify(this.employeeForm.value));
            console.log(this.usernames+" "+this.passwords);

            for(var i=0; i<this.usernames.length ; i++){

              console.log("loop i called");

              if( (this.employeeForm.get('username').value == this.usernames[i]) &&
                   (this.employeeForm.get('password').value == this.passwords[i]) ){

                     this.count = this.count+1;

              }

            }


            console.log(this.count);

            if (this.count == 1) {
                    this.auth.loggedInStatus = true;
                    console.log("true");
                    this.count = 0;
                    window.alert("You're logged In successfully !!")
                    this.router.navigate(['/about']);
            }else{
                  window.alert("Username and password is wrong")
            }

      }
}
