"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
// Import your library
var ngx_slick_carousel_1 = require("ngx-slick-carousel");
var forms_1 = require("@angular/forms");
var pages_module_1 = require("./pages/pages.module");
var que_stion_component_1 = require("../pages/que-stion/que-stion.component");
var home_page_component_1 = require("./home-page/home-page.component");
var stretcher_component_1 = require("./stretcher/stretcher.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, sidebar_component_1.SidebarComponent, que_stion_component_1.QueStionComponent, home_page_component_1.HomePageComponent, stretcher_component_1.StretcherComponent],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, ngx_slick_carousel_1.SlickCarouselModule, forms_1.FormsModule, pages_module_1.PagesModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
