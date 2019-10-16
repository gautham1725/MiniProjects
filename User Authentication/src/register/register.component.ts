import { ServiceComponent } from './../service/service.component';
import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { GuardService } from "src/Guard/guard.service";
import { AuthGuard } from "src/Guard/auth.guard";
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, FormBuilder , Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit { 

    constructor( private router : Router , private http:HttpClient, 
            private fb : FormBuilder , private auth : GuardService , private service : ServiceComponent ){ }

    employeeForm : FormGroup;
    username:string;
    password:string;

    ngOnInit(): void {
        this.employeeForm = this.fb.group({
          username : ['' , Validators.required],
          password : ['' , Validators.required]
        })
    }

    submit(){
        this.service.sendUsername(this.employeeForm.get('username').value);
        this.service.sendPassword(this.employeeForm.get('password').value);
    }

}