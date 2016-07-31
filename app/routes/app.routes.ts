import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent }  from '../components/login.component';
import {HomeComponent} from '../components/home.component';
import {RegisterComponent} from '../components/register.component';
import {PlaceAdvertComponent} from '../components/placeadvert.component';
import {LogoutComponent} from '../components/logout.component';
import {AuthGuardService} from '../services/authguard.service';

export const routes: RouterConfig = [
     {path:'',component:HomeComponent},
     {path:'Home',component:HomeComponent},
     { path: 'Login', component: LoginComponent},
     {path:'Register',component:RegisterComponent},
     {path:'Placeadvert',component:PlaceAdvertComponent,canActivate:[AuthGuardService]},
     {path:'Logout',component:LogoutComponent}
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];