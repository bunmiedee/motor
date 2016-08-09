import {Component, OnInit} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {ControlGroup,FormBuilder,Validators} from '@angular/common';


@Component({
    selector:'place-advert',
    templateUrl:'app/templates/placeadvert.template.html',
    providers:[CarsService]
})
export class PlaceAdvertComponent implements OnInit{
    autos;
    models;
    selectedMake = "BMW";
    make:string = "BMW";
    postAdvertForm:ControlGroup;
    body: string = JSON.stringify({make: "Ryan"});
    constructor(private _carservice:CarsService,fb:FormBuilder){
        this.postAdvertForm = fb.group({
            make:['',Validators.required],
            model:['',Validators.required],
            year:['',Validators.required],
            mileage:['',Validators.required],
            price:['',Validators.required],
            fuel:['',Validators.required],
            image:['',Validators.required],
            description:['',Validators.required]


        })
    }
    getModels(arraySelected,makeSelected):string[]{
        for(let arrayItem of arraySelected){
            if(makeSelected == arrayItem.Make){
                return this.models = arrayItem.Model
            }
        }
    }
    onChange(newValue){
        this.getModels(this.autos,newValue)
    }
    creds:string = "make=" + this.make;
    postAdvert(){
        this._carservice.postCars(this.postAdvertForm.value);
        // console.log(this.loginForm.value);
        // event.preventDefault();
    }
    ngOnInit(){
        this._carservice.getAutos()
            .subscribe(autos=>{
                this.autos=autos;
                this.models = this.autos[0].Model;
            })
    }
}
