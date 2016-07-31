System.register(['@angular/http', 'rxjs/add/operator/map', '@angular/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var CarsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import localStorage from 'localStorage';
            CarsService = (function () {
                function CarsService(_http) {
                    this._http = _http;
                    this.loggedIn = false;
                    this._getUrl = 'http://www.edgetheinstitute.com:9000/cars';
                    // private _postUrl:string='http://localhost:8000/car';
                    this._postUsersUrl = 'http://www.edgetheinstitute.com:9000/users';
                    this._authenticateUrl = 'http://www.edgetheinstitute.com:9000/users/authenticate';
                    this._photosUrl = 'http://localhost:9000/photos';
                    this.loggedIn = !!localStorage.getItem('auth_token');
                }
                CarsService.prototype.getCars = function () {
                    return this._http.get(this._getUrl)
                        .map(function (response) { return response.json(); });
                };
                CarsService.prototype.getCarsById = function (id) {
                    return this._http.get(this._getUrl)
                        .map(function (response) { return response.json()[id]; });
                };
                CarsService.prototype.uploadPhotos = function (photo) {
                    var headers = new http_1.Headers({
                        'encType': 'multipart/form-data'
                    });
                    return this._http.post(this._photosUrl, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (photo) {
                        console.log(photo);
                    });
                };
                CarsService.prototype.postCars = function (car) {
                    var headers = new http_1.Headers({
                        /*'Content-Type':'application/x-www-form-urlencoded'*/
                        'Content-Type': 'application/json'
                    });
                    // );
                    // headers.append('Content-Type', 'application/json');
                    // var headers = new Headers();
                    //headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post(this._getUrl, JSON.stringify(car), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (cars) {
                        console.log(cars);
                    });
                };
                CarsService.prototype.postUsers = function (user) {
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this._http.post(this._postUsersUrl, JSON.stringify(user), { headers: headers })
                        .subscribe(function (res) {
                        if (res.status == 200) {
                            console.log('well done Kam');
                        }
                        console.log(res);
                        //console.log(res._body.token)
                    });
                };
                CarsService.prototype.authenticateUsers = function (user) {
                    var _this = this;
                    var headers = new http_1.Headers({
                        'Content-Type': 'application/json'
                    });
                    return this._http.post(this._authenticateUrl, JSON.stringify(user), { headers: headers })
                        .map(function (res) { return res.json(); })
                        .map(function (res) {
                        if (res.success) {
                            localStorage.setItem('auth_token', res.token);
                            _this.loggedIn = true;
                        }
                        //console.log(res)
                        return res;
                    });
                };
                CarsService.prototype.logOut = function () {
                    localStorage.removeItem('token');
                    this.loggedIn = false;
                };
                CarsService.prototype.isLoggedIn = function () {
                    return this.loggedIn;
                };
                CarsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CarsService);
                return CarsService;
            }());
            exports_1("CarsService", CarsService);
        }
    }
});
//# sourceMappingURL=cars.service.js.map