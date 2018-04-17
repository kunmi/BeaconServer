import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";
import {DashUsersComponent} from "./admin/dash-users/dash-users.component";
import {NgModule} from "@angular/core";
import {DashOverviewComponent} from "./client/project-overview/dash-overview.component";
import {DashProjectsComponent} from "./admin/dash-projects/dash-projects.component";
import {DashProjectHomeComponent} from "./admin/dash-project-detail/dash-project-home.component";
import {DashFloorplanComponent} from "./admin/dash-floorplan/dash-floorplan.component";
import {ClientFloorplanComponent} from "./client/floorplan/floorplan.component";
import {ProfileComponent} from "./client/profile/profile.component";

const dashRoutes: Routes = [

  { path: '', component: DashboardComponent, canActivate:[AuthGuard],  children:[
      {path: '', redirectTo: "overview", pathMatch:"full"},
      {path: 'overview', component: DashOverviewComponent},
      {path: 'users',component: DashUsersComponent},
      {path: 'projects', component: DashProjectsComponent},
      {path: 'projects/:id', component: DashProjectHomeComponent},

      {path: 'projects/:projectid/floorplan/:floorplanid', component: DashFloorplanComponent},


      {path: 'project/:id',  children: [
          {path: '', redirectTo: 'home', pathMatch: 'full'},
          {path: 'home', component: DashOverviewComponent},
          {path: 'floorplan/:floorplanId', component: ClientFloorplanComponent},
          {path: 'contents/:id', component: DashUsersComponent}

        ]},

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
