System.register(['@angular/core', '../services/cars.service'], function(exports_1, context_1) {
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
    var core_1, cars_service_1;
    var SearchForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cars_service_1_1) {
                cars_service_1 = cars_service_1_1;
            }],
        execute: function() {
            SearchForm = (function () {
                function SearchForm(_carservice) {
                    this._carservice = _carservice;
                    this.selectedMake = "BMW";
                }
                SearchForm.prototype.getModels = function (arraySelected, makeSelected) {
                    for (var _i = 0, arraySelected_1 = arraySelected; _i < arraySelected_1.length; _i++) {
                        var arrayItem = arraySelected_1[_i];
                        if (makeSelected == arrayItem.Make) {
                            return this.models = arrayItem.Model;
                        }
                    }
                };
                SearchForm.prototype.onChange = function (newValue) {
                    this.getModels(this.cars, newValue);
                };
                SearchForm.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carservice.getCars()
                        .subscribe(function (cars) {
                        _this.cars = cars;
                        _this.models = _this.cars[0].Model;
                    });
                };
                SearchForm = __decorate([
                    core_1.Component({
                        selector: 'search-form',
                        templateUrl: 'app/templates/searchform.template.html',
                        styleUrls: ['app/styles/searchform.style.css'],
                        providers: [cars_service_1.CarsService]
                    }), 
                    __metadata('design:paramtypes', [cars_service_1.CarsService])
                ], SearchForm);
                return SearchForm;
            }());
            exports_1("SearchForm", SearchForm);
        }
    }
});
//# sourceMappingURL=searchform.component.js.map