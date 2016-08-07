import {Component} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {ControlGroup,FormBuilder,Validators} from '@angular/common';
import {Router} from '@angular/router';


@Component({
    selector:'place-advert',
    templateUrl:'app/templates/register.template.html',
    providers:[CarsService ]
})
export class RegisterComponent{
    registerForm:ControlGroup;

    constructor(private _carservice:CarsService,fb:FormBuilder,private _router:Router){
        this.registerForm = fb.group({
            username:['',Validators.compose([Validators.required,Validators.minLength(5)])],
            password:['',Validators.compose([Validators.required,Validators.minLength(5)])]
        })
        console.log(this.registerForm.controls);
    }
    registerUser(){
        this._carservice.postUsers(this.registerForm.value);
        this._router.navigate(['Home']);
        console.log(this.registerForm.controls);
        this.registerForm.controls.username.updateValue('');
        //this.registerForm.controls.username.setErrors(null);
        this.registerForm.controls.password.updateValue('');
        //this.registerForm.controls.password.setErrors(null);
        /*    controls.forEach((name, control) => {
         control.updateValue('');
         control.setErrors(null);
         });*/
    }
}
