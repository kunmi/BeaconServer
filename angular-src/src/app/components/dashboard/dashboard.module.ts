import { NgModule } from '@angular/core';
import {DashboardComponent} from "./dashboard.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {DashHomeComponent} from "./admin/dash-home/dash-home.component";
import {DashOverviewComponent} from "./client/dash-overview/dash-overview.component";
import {DashUsersComponent} from "./admin/dash-users/dash-users.component";
import {ProfileComponent} from "./client/profile/profile.component";
import {RegisterComponent} from "./admin/dash-users/register/register.component";
import {InfoDialogComponent, YesNoDialogComponent} from "../util.component";
import {DashProjectsComponent} from "./admin/dash-projects/dash-projects.component";
import {DashProjectDialogComponents} from "./admin/dash-projects/dash-project-dialog.components";
import {DashProjectHomeComponent} from "./admin/dash-project-detail/dash-project-home.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedMaterialModule} from "../../material-module";
import {ProjectImageDialogComponent} from "./admin/dash-project-detail/project-image-dialog.components";
import {DashFloorplanComponent} from "./admin/dash-floorplan/dash-floorplan.component";
import {ProjectProvider} from "../../services/project.service";
import {UserProvider} from "../../services/user.service";
import {FloorplanProvider} from "../../services/floorplan.service";
import {ImgMapComponent} from "../plugin/ng2-img-map";
import {FileSizePipe} from "../plugin/file-size.pipe";
import {BeaconDialogComponent} from "./admin/dash-beacon/beacon-dialog.component";
import {DialogFloorPlanNameComponent} from "./admin/dash-floorplan/dialog-floorplan-name.component";


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    DashHomeComponent,
    DashOverviewComponent,
    DashUsersComponent,
    ProfileComponent,
    RegisterComponent,
    YesNoDialogComponent,
    InfoDialogComponent,
    DashProjectsComponent,
    DashProjectDialogComponents,
    DashProjectHomeComponent,
    ProjectImageDialogComponent,
    DashFloorplanComponent,
    ImgMapComponent,
    FileSizePipe,
    BeaconDialogComponent,
    DialogFloorPlanNameComponent
  ],
  entryComponents:[YesNoDialogComponent, DashProjectDialogComponents, InfoDialogComponent, ProjectImageDialogComponent, BeaconDialogComponent, DialogFloorPlanNameComponent],
  imports: [
    DashboardRoutingModule,
   CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedMaterialModule
  ],
  providers: [UserProvider, ProjectProvider, FloorplanProvider]
})


export class DashboardModule { }



