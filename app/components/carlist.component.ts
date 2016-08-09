import {Component, OnInit, Input} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {SlicePipe} from '../pipes/slice.pipe';
import {SearchPipe} from '../pipes/search.pipe';
import {SelectPipe} from '../pipes/select.pipe';
import {CollapseClick} from '../directives/collapse-click';
@Component({
    selector:'car-list',
    directives:[CollapseClick],
    templateUrl:'app/templates/carlist.template.html',
    providers:[CarsService],
    pipes:[SlicePipe,SearchPipe,SelectPipe]
})
export class CarList implements OnInit{
    @Input() searchQuery;
    @Input() selectMake;
    @Input() selectModel;
    cars;
    constructor(private _carservice:CarsService){
       // console.log(this.searchQuery)
    }
    ngOnInit(){
        this._carservice.getCars()
            .subscribe(cars=>{this.cars=cars;
                //console.log(this.cars)
                });
    }
    ngOnChanges():void{
        //console.log(this.searchQuery)
       // console.log(this.test)
    }
}
