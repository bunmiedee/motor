import {Injectable} from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{
        constructor(private _router:Router){

        }
        canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
                if(localStorage.getItem('auth_token'))
                        return true;
                this._router.navigate(['Login']);
                return false;

        }
}
