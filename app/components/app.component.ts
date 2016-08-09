import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'app',
    templateUrl:'app/templates/app.template.html',
    directives: [ROUTER_DIRECTIVES,NavbarComponent]
})
export class AppComponent { }