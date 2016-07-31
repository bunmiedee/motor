import {Component} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Router} from '@angular/router';
@Component({
    selector: 'place-advert',
    templateUrl:'app/templates/login.template.html',
    providers: [CarsService]
})
export class LoginComponent {
    make:string = "BMW";
    loginForm:ControlGroup;
    body:string = JSON.stringify({make: "Ryan"});
    showUserError:boolean=false;
    showPassError:boolean=false;
    constructor(private _carservice:CarsService, fb:FormBuilder, private _router:Router) {
        this.loginForm = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
    creds:string = "make=" + this.make;

    loginUser() {
        this._carservice.authenticateUsers(this.loginForm.value)
            .subscribe((res)=> {
                if (!res.user) {
                    this.showUserError = true;
                }
                else if (!res.pass){
                    this.showUserError = false;
                    this.showPassError = true;
                }
                else{
                    this._router.navigate(['Home']);
                }
            })
    }
}