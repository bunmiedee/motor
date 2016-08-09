import {Component} from '@angular/core';
import {CarList} from './carlist.component';
import {SearchForm} from './searchform.component';
import {SearchBar} from './searchbar.component';

@Component({
    selector:'home-section',
    templateUrl:'app/templates/home.template.html',
    directives:[CarList,SearchForm,SearchBar]
})

export class HomeComponent{

}