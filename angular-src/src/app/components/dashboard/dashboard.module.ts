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
import {DashProjectHomeComponent} from "./admin/dash-projects/home/dash-project-home/dash-project-home.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedMaterialModule} from "../../material-module";



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
    DashProjectHomeComponent
  ],
  entryComponents:[YesNoDialogComponent, DashProjectDialogComponents, InfoDialogComponent],
  imports: [
    DashboardRoutingModule,
   CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedMaterialModule
  ]
})


export class DashboardModule { }



