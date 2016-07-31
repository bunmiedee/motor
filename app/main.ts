// main entry point
import { bootstrap } from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import { AppComponent } from './components/app.component';
import { APP_ROUTER_PROVIDERS } from './routes/app.routes';
import {AuthGuardService} from './services/authguard.service'
import {enableProdMode} from "@angular/core";
enableProdMode();
bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    AuthGuardService
])
    .catch(err => console.error(err));