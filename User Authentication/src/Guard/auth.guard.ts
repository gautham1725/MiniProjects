import {Injectable} from '@angular/core';  
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'   
import { GuardService } from "src/Guard/guard.service";


@Injectable({
    providedIn: 'root'
})


export class AuthGuard implements CanActivate{  

    constructor(private auth : GuardService){

    }

    canActivate(next : ActivatedRouteSnapshot ,
                state : RouterStateSnapshot
                ) : boolean {

                    return this.auth.isloggedIn();

                 }

    }  