import { Router } from "@angular/router";

export class GuardService {

    constructor( private router : Router ){}

    loggedInStatus:boolean;

    getLoggedIn(value:any){

        console.log("inside guard service");

        this.loggedInStatus = value;
        console.log(this.loggedInStatus);
    }

    isloggedIn(){
        return this.loggedInStatus
    }


}