"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navbar_component_1 = require('./navbar.component');
var searchbar_component_1 = require('./searchbar.component');
var movieDetail_component_1 = require('./movieDetail.component');
var movieDetail_service_1 = require('./movieDetail.service');
var AppComponent = (function () {
    function AppComponent(_movie_detail_service) {
        this._movie_detail_service = _movie_detail_service;
    }
    AppComponent.prototype.onNotify = function (message) {
        var _this = this;
        this._movie_detail_service.getAllDetials(message).then(function (data) { return _this.search_query = data; });
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div class=\"container\">\n\t                <mynavbar></mynavbar>\n\t                <inputbox (notify)='onNotify($event)'></inputbox> \n\t                <movie-details [movie_detail]=\"search_query\"></movie-details>          \n              </div>\n             ",
            directives: [navbar_component_1.NavbarComponent, searchbar_component_1.SearchbarComponent, movieDetail_component_1.MovieDetailComponent],
            providers: [movieDetail_service_1.MovieDetailService]
        }), 
        __metadata('design:paramtypes', [movieDetail_service_1.MovieDetailService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map