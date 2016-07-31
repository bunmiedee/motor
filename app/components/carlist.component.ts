import {Component,OnInit} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {SlicePipe} from '../pipes/slice.pipe';
import {CollapseClick} from '../directives/collapse-click';
@Component({
    selector:'car-list',
    directives:[CollapseClick],
    templateUrl:'app/templates/carlist.template.html',
    providers:[CarsService],
    pipes:[SlicePipe]
})

export class CarList implements OnInit{
    cars;
    constructor(private _carservice:CarsService){

    }
    ngOnInit(){
        this._carservice.getCars()
            .subscribe(cars=>{this.cars=cars;
                //console.log(this.cars)
                });
    }
}
