System.register(['@angular/router', '../components/login.component', '../components/home.component', '../components/register.component', '../components/placeadvert.component', '../components/logout.component', '../services/authguard.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_component_1, home_component_1, register_component_1, placeadvert_component_1, logout_component_1, authguard_service_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (placeadvert_component_1_1) {
                placeadvert_component_1 = placeadvert_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (authguard_service_1_1) {
                authguard_service_1 = authguard_service_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'Home', component: home_component_1.HomeComponent },
                { path: 'Login', component: login_component_1.LoginComponent },
                { path: 'Register', component: register_component_1.RegisterComponent },
                { path: 'Placeadvert', component: placeadvert_component_1.PlaceAdvertComponent, canActivate: [authguard_service_1.AuthGuardService] },
                { path: 'Logout', component: logout_component_1.LogoutComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map