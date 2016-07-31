System.register(['@angular/core', '../services/cars.service', '@angular/common', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, cars_service_1, common_1, router_1;
    var LoginComponent;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_carservice, fb, _router) {
                    this._carservice = _carservice;
                    this._router = _router;
                    this.make = "BMW";
                    this.body = JSON.stringify({ make: "Ryan" });
                    this.showUserError = false;
                    this.showPassError = false;
                    this.creds = "make=" + this.make;
                    this.loginForm = fb.group({
                        username: ['', common_1.Validators.required],
                        password: ['', common_1.Validators.required]
                    });
                }
                LoginComponent.prototype.loginUser = function () {
                    var _this = this;
                    this._carservice.authenticateUsers(this.loginForm.value)
                        .subscribe(function (res) {
                        if (!res.user) {
                            _this.showUserError = true;
                        }
                        else if (!res.pass) {
                            _this.showUserError = false;
                            _this.showPassError = true;
                        }
                        else {
                            _this._router.navigate(['Home']);
                        }
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'place-advert',
                        templateUrl: 'app/templates/login.template.html',
                        providers: [cars_service_1.CarsService]
                    }), 
                    __metadata('design:paramtypes', [cars_service_1.CarsService, common_1.FormBuilder, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map