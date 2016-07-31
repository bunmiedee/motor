import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CarsService} from '../services/cars.service';

@Component({
    selector:'my-navbar',
    templateUrl: 'app/templates/navbar.template.html',
    directives: [ROUTER_DIRECTIVES],
    providers:[CarsService]
})
export class NavbarComponent{
    showLogin:string = "Login";
    constructor(private _carservice:CarsService) {
    }
    showHide(){
        if(localStorage.getItem('auth_token')){
            this.showLogin = "Logout";
            return true;
        }
        else{
            localStorage.clear();
            this.showLogin = "Login";
            return true;
        }
    }
}

