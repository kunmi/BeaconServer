"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./dashboard.component");
var auth_guard_1 = require("../../guards/auth.guard");
var dash_users_component_1 = require("./admin/dash-users/dash-users.component");
var core_1 = require("@angular/core");
var dash_overview_component_1 = require("./client/dash-overview/dash-overview.component");
var dash_projects_component_1 = require("./admin/dash-projects/dash-projects.component");
var dash_project_home_component_1 = require("./admin/dash-project-detail/dash-project-home.component");
var dash_floorplan_component_1 = require("./admin/dash-floorplan/dash-floorplan.component");
var dashRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard], children: [
            { path: '', redirectTo: "overview", pathMatch: "full" },
            { path: 'overview', component: dash_overview_component_1.DashOverviewComponent },
            { path: 'users', component: dash_users_component_1.DashUsersComponent },
            { path: 'projects', component: dash_projects_component_1.DashProjectsComponent },
            { path: 'projects/:id', component: dash_project_home_component_1.DashProjectHomeComponent },
            { path: 'projects/:projectid/floorplan/:floorplanid', component: dash_floorplan_component_1.DashFloorplanComponent },
            { path: 'x', component: dash_users_component_1.DashUsersComponent }
        ] },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(dashRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
exports.DashboardRoutingModule = DashboardRoutingModule;
