    import {Component,Output,EventEmitter,OnInit} from '@angular/core';
    import {CarsService} from '../services/cars.service';
    @Component({
        selector: 'search-form',
        templateUrl: 'app/templates/searchform.template.html',
        styleUrls:['app/styles/searchform.style.css'],
        providers:[CarsService]
    })
    export class SearchForm implements OnInit{
        cars;
        models;
        selectedMake = "BMW";
        @Output() select = new EventEmitter();
        constructor(private _carservice:CarsService){
        }
        getModels(arraySelected,makeSelected):string[]{
            for(let arrayItem of arraySelected){
                if(makeSelected == arrayItem.Make){
                    return this.models = arrayItem.Model
                }
            }
        }
        onChange(newValue){
            this.getModels(this.cars,newValue)
        }
        ngOnInit(){
            this.select.emit('');
            this._carservice.getAutos()
                .subscribe(cars=> {
                    this.cars = cars;
                    this.models = this.cars[0].Model;
                });
        }
    }
