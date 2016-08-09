System.register(['@angular/core', '../services/cars.service', '@angular/common'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cars_service_1, common_1;
    var PlaceAdvertComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cars_service_1_1) {
                cars_service_1 = cars_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            PlaceAdvertComponent = (function () {
                function PlaceAdvertComponent(_carservice, fb) {
                    this._carservice = _carservice;
                    this.selectedMake = "BMW";
                    this.make = "BMW";
                    this.body = JSON.stringify({ make: "Ryan" });
                    this.creds = "make=" + this.make;
                    this.postAdvertForm = fb.group({
                        make: ['', common_1.Validators.required],
                        model: ['', common_1.Validators.required],
                        year: ['', common_1.Validators.required],
                        mileage: ['', common_1.Validators.required],
                        price: ['', common_1.Validators.required],
                        fuel: ['', common_1.Validators.required],
                        image: ['', common_1.Validators.required],
                        description: ['', common_1.Validators.required]
                    });
                }
                PlaceAdvertComponent.prototype.getModels = function (arraySelected, makeSelected) {
                    for (var _i = 0, arraySelected_1 = arraySelected; _i < arraySelected_1.length; _i++) {
                        var arrayItem = arraySelected_1[_i];
                        if (makeSelected == arrayItem.Make) {
                            return this.models = arrayItem.Model;
                        }
                    }
                };
                PlaceAdvertComponent.prototype.onChange = function (newValue) {
                    this.getModels(this.autos, newValue);
                };
                PlaceAdvertComponent.prototype.postAdvert = function () {
                    this._carservice.postCars(this.postAdvertForm.value);
                    // console.log(this.loginForm.value);
                    // event.preventDefault();
                };
                PlaceAdvertComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carservice.getAutos()
                        .subscribe(function (autos) {
                        _this.autos = autos;
                        _this.models = _this.autos[0].Model;
                    });
                };
                PlaceAdvertComponent = __decorate([
                    core_1.Component({
                        selector: 'place-advert',
                        templateUrl: 'app/templates/placeadvert.template.html',
                        providers: [cars_service_1.CarsService]
                    }), 
                    __metadata('design:paramtypes', [cars_service_1.CarsService, common_1.FormBuilder])
                ], PlaceAdvertComponent);
                return PlaceAdvertComponent;
            }());
            exports_1("PlaceAdvertComponent", PlaceAdvertComponent);
        }
    }
});
//# sourceMappingURL=placeadvert.component.js.map