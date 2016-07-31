import {Component} from '@angular/core';
@Component({
    templateUrl: 'app/templates/logout.template.html'
})
export class LogoutComponent{
    constructor(){
        localStorage.clear();
    }
}
