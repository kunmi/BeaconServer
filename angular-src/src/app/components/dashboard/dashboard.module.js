"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var dashboard_component_1 = require("./dashboard.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var dash_home_component_1 = require("./admin/dash-home/dash-home.component");
var dash_overview_component_1 = require("./client/dash-overview/dash-overview.component");
var dash_users_component_1 = require("./admin/dash-users/dash-users.component");
var profile_component_1 = require("./client/profile/profile.component");
var register_component_1 = require("./admin/dash-users/register/register.component");
var util_component_1 = require("../util.component");
var dash_projects_component_1 = require("./admin/dash-projects/dash-projects.component");
var dash_project_dialog_components_1 = require("./admin/dash-projects/dash-project-dialog.components");
var dash_project_home_component_1 = require("./admin/dash-project-detail/dash-project-home.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var material_module_1 = require("../../material-module");
var project_image_dialog_components_1 = require("./admin/dash-project-detail/project-image-dialog.components");
var dash_floorplan_component_1 = require("./admin/dash-floorplan/dash-floorplan.component");
var project_service_1 = require("../../services/project.service");
var user_service_1 = require("../../services/user.service");
var floorplan_service_1 = require("../../services/floorplan.service");
var ng2_img_map_1 = require("../plugin/ng2-img-map");
var file_size_pipe_1 = require("../plugin/file-size.pipe");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_component_1.DashboardComponent,
                sidebar_component_1.SidebarComponent,
                dash_home_component_1.DashHomeComponent,
                dash_overview_component_1.DashOverviewComponent,
                dash_users_component_1.DashUsersComponent,
                profile_component_1.ProfileComponent,
                register_component_1.RegisterComponent,
                util_component_1.YesNoDialogComponent,
                util_component_1.InfoDialogComponent,
                dash_projects_component_1.DashProjectsComponent,
                dash_project_dialog_components_1.DashProjectDialogComponents,
                dash_project_home_component_1.DashProjectHomeComponent,
                project_image_dialog_components_1.ProjectImageDialogComponent,
                dash_floorplan_component_1.DashFloorplanComponent,
                ng2_img_map_1.ImgMapComponent,
                file_size_pipe_1.FileSizePipe
            ],
            entryComponents: [util_component_1.YesNoDialogComponent, dash_project_dialog_components_1.DashProjectDialogComponents, util_component_1.InfoDialogComponent, project_image_dialog_components_1.ProjectImageDialogComponent],
            imports: [
                dashboard_routing_module_1.DashboardRoutingModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                material_module_1.SharedMaterialModule
            ],
            providers: [user_service_1.UserProvider, project_service_1.ProjectProvider, floorplan_service_1.FloorplanProvider]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
