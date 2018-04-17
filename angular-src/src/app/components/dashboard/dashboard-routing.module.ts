import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";
import {DashUsersComponent} from "./admin/dash-users/dash-users.component";
import {NgModule} from "@angular/core";
import {UserProvider} from "../../services/user.service";
import {DashOverviewComponent} from "./client/project-overview/dash-overview.component";
import {DashProjectsComponent} from "./admin/dash-projects/dash-projects.component";
import {ProjectProvider} from "../../services/project.service";
import {ProfileComponent} from "./client/profile/profile.component";
import {DashProjectHomeComponent} from "./admin/dash-project-detail/dash-project-home.component";
import {DashFloorplanComponent} from "./admin/dash-floorplan/dash-floorplan.component";
import {FloorplanProvider} from "../../services/floorplan.service";

const dashRoutes: Routes = [

  { path: '', component: DashboardComponent, canActivate:[AuthGuard],  children:[
      {path: '', redirectTo: "overview", pathMatch:"full"},
      {path: 'overview', component: DashOverviewComponent},
      {path: 'users',component: DashUsersComponent},
      {path: 'projects', component: DashProjectsComponent},
      {path: 'projects/:id', component: DashProjectHomeComponent},

      {path: 'projects/:projectid/floorplan/:floorplanid', component: DashFloorplanComponent},


      {path: 'project/:id', component: DashOverviewComponent}
    ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(dashRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
