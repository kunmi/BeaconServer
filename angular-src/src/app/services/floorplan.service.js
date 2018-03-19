"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/common/http");
var FloorplanProvider = (function () {
    function FloorplanProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    FloorplanProvider.prototype.getFloorPlan = function (floorplanId, projectId) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'floorplan/' + floorplanId + '/project/' + projectId, { headers: headers }).map(function (res) { return res; });
    };
    FloorplanProvider = __decorate([
        core_1.Injectable()
    ], FloorplanProvider);
    return FloorplanProvider;
}());
exports.FloorplanProvider = FloorplanProvider;
