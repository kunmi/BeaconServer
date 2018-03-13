"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require('@angular/common/http');
require('rxjs/add/operator/map');
var UserProvider = (function () {
    function UserProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    UserProvider.prototype.getUsers = function () {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'users', { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.getUser = function (id) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'users/' + id, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.registerUser = function (user) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'users/register', user, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.updateUser = function (user) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this.values.getServiceEndPoint() + 'users/' + user._id, user, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider.prototype.deleteUser = function (user) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.values.getServiceEndPoint() + 'users/' + user._id, { headers: headers })
            .map(function (res) { return res; });
    };
    UserProvider = __decorate([
        core_1.Injectable()
    ], UserProvider);
    return UserProvider;
}());
exports.UserProvider = UserProvider;
