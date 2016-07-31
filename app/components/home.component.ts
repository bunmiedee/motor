import {Component} from '@angular/core';
import {CarList} from './carlist.component'
@Component({
    selector:'home-section',
    templateUrl:'app/templates/home.template.html',
    directives:[CarList]
})

export class HomeComponent{

}