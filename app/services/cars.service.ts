import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Car} from '../interfaces/cars.interface';
import {Auto} from '../interfaces/autos.interface';
//import localStorage from 'localStorage';

@Injectable()
export class CarsService {
    private loggedIn = false;
    private _getAutoUrl:string = 'http://www.edgetheinstitute.com:9000/autos';
   private _getUrl:string = 'http://www.edgetheinstitute.com:9000/cars';
   // private _getUrl:string = 'http://localhost:9000/cars';
    // private _postUrl:string='http://localhost:8000/car';
    private _postUsersUrl:string = 'http://www.edgetheinstitute.com:9000/users';
    //private _postUsersUrl:string = 'http://localhost:9000/users';
    private _authenticateUrl:string = 'http://www.edgetheinstitute.com:9000/users/authenticate';
    //private _authenticateUrl:string = 'http://localhost:9000/users/authenticate'
    private _photosUrl:string = 'http://localhost:9000/photos';
    constructor(private _http:Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    getAutos():Observable<Auto[]>{
        return this._http.get(this._getAutoUrl)
            .map(response=>response.json())
    }
    getCars():Observable<Car[]> {
        return this._http.get(this._getUrl)
            .map(response=>response.json())
    }
    getCarsById(id) {
        return this._http.get(this._getUrl)
            .map(response=>response.json()[id])

    }
    uploadPhotos(photo){
        let headers = new Headers({
            'encType':'multipart/form-data'
        });
        return this._http.post(this._photosUrl,{headers:headers})
            .map(res=>res.json())
            .subscribe(photo=> {
                console.log(photo)
            })
    }
    postCars(car) {
        let headers = new Headers({
            /*'Content-Type':'application/x-www-form-urlencoded'*/
            'Content-Type': 'application/json'
        });
        // );
        // headers.append('Content-Type', 'application/json');
        // var headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this._getUrl, JSON.stringify(car), {headers: headers})
            .map(res=>res.json())
            .subscribe(cars=> {
                console.log(cars)
            })
    }

    postUsers(user) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this._postUsersUrl, JSON.stringify(user), {headers: headers})
        //.map(res=>console.log(res.json()))
            .subscribe(res=> {
                if (res.status == 200) {
                    console.log('well done Kam');
                    // window.localStorage.setItem('statusText',res.statusText)
                }
                console.log(res);
                //console.log(res._body.token)
            })
    }

    authenticateUsers(user) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this._authenticateUrl, JSON.stringify(user), {headers: headers})
            .map(res=>res.json())
            .map(res=> {
                if (res.success) {
                    localStorage.setItem('auth_token', res.token);
                    this.loggedIn = true;
                }
                //console.log(res)
                return res;

            })
    }

    logOut(){
        localStorage.removeItem('token');
        this.loggedIn = false;
    }
    isLoggedIn(){
        return this.loggedIn;
    }
}



