System.register(['@angular/core', '../services/cars.service', '../pipes/slice.pipe', '../pipes/search.pipe', '../pipes/select.pipe', '../directives/collapse-click'], function(exports_1, context_1) {
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
    var core_1, cars_service_1, slice_pipe_1, search_pipe_1, select_pipe_1, collapse_click_1;
    var CarList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cars_service_1_1) {
                cars_service_1 = cars_service_1_1;
            },
            function (slice_pipe_1_1) {
                slice_pipe_1 = slice_pipe_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (select_pipe_1_1) {
                select_pipe_1 = select_pipe_1_1;
            },
            function (collapse_click_1_1) {
                collapse_click_1 = collapse_click_1_1;
            }],
        execute: function() {
            CarList = (function () {
                function CarList(_carservice) {
                    this._carservice = _carservice;
                    // console.log(this.searchQuery)
                }
                CarList.prototype.ngOnInit = function () {
                    var _this = this;
                    this._carservice.getCars()
                        .subscribe(function (cars) {
                        _this.cars = cars;
                        //console.log(this.cars)
                    });
                };
                CarList.prototype.ngOnChanges = function () {
                    //console.log(this.searchQuery)
                    // console.log(this.test)
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CarList.prototype, "searchQuery", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CarList.prototype, "selectMake", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CarList.prototype, "selectModel", void 0);
                CarList = __decorate([
                    core_1.Component({
                        selector: 'car-list',
                        directives: [collapse_click_1.CollapseClick],
                        templateUrl: 'app/templates/carlist.template.html',
                        providers: [cars_service_1.CarsService],
                        pipes: [slice_pipe_1.SlicePipe, search_pipe_1.SearchPipe, select_pipe_1.SelectPipe]
                    }), 
                    __metadata('design:paramtypes', [cars_service_1.CarsService])
                ], CarList);
                return CarList;
            }());
            exports_1("CarList", CarList);
        }
    }
});
//# sourceMappingURL=carlist.component.js.map