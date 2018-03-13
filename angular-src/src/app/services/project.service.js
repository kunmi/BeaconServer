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
var ProjectProvider = (function () {
    function ProjectProvider(http, authService, values) {
        this.http = http;
        this.authService = authService;
        this.values = values;
    }
    ProjectProvider.prototype.getProjects = function () {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects', { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.getProject = function (id) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers = headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects/' + id, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.registerProject = function (project) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/register', project, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.updateproject = function (project) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.patch(this.values.getServiceEndPoint() + 'projects/' + project._id, project, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.deleteProject = function (project) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.values.getServiceEndPoint() + 'projects/' + project._id, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.addToProject = function (thisUser, project) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/' + project._id + '/adduser', thisUser, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.removeFromProjects = function (thisUser, project) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/' + project._id + '/removeuser', thisUser, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.addImagesToProject = function (projectID, images) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.values.getServiceEndPoint() + 'projects/' + projectID + '/upload', images, { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider.prototype.getImagesForProject = function (projectId) {
        var headers = new http_1.HttpHeaders();
        this.authService.loadToken();
        headers = headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.values.getServiceEndPoint() + 'projects/' + projectId + '/images', { headers: headers })
            .map(function (res) { return res; });
    };
    ProjectProvider = __decorate([
        core_1.Injectable()
    ], ProjectProvider);
    return ProjectProvider;
}());
exports.ProjectProvider = ProjectProvider;
