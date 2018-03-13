"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.name.length == 0) {
            return false;
        }
        if (user.username == undefined || user.username.length == 0) {
            return false;
        }
        if (user.email == undefined || user.email.length == 0) {
            return false;
        }
        if (user.password == undefined || user.password.length == 0) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateProjectRegistration = function (project) {
        if (project.name == undefined || project.name.length == 0) {
            return false;
        }
        else if (project.email == undefined || project.email.length == 0) {
            return false;
        }
        return true;
    };
    ValidateService = __decorate([
        core_1.Injectable()
    ], ValidateService);
    return ValidateService;
}());
exports.ValidateService = ValidateService;
