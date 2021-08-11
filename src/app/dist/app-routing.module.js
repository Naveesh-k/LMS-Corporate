"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_page_component_1 = require("./home-page/home-page.component");
var dashboard_component_1 = require("./login/dashboard/dashboard.component");
var stretcher_component_1 = require("./stretcher/stretcher.component");
var routes = [
    { path: '', component: dashboard_component_1.DashboardComponent },
    // { path: '', component: HomePageComponent},
    { path: 'home-page', component: home_page_component_1.HomePageComponent },
    { path: 'stretcher', component: stretcher_component_1.StretcherComponent },
    {
        path: 'login-module',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./login/login.module'); }).then(function (m) { return m.LoginModule; });
        }
    },
    {
        path: 'pages',
        loadChildren: function () {
            return Promise.resolve().then(function () { return require('./pages/pages.module'); }).then(function (m) { return m.PagesModule; });
        }
    },
    { path: 'auth-module', loadChildren: function () { return Promise.resolve().then(function () { return require('./auth-pages/auth-pages.module'); }).then(function (m) { return m.AuthPagesModule; }); } },
    { path: '**', component: dashboard_component_1.DashboardComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
