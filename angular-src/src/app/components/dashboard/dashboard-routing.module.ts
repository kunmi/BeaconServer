import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../../guards/auth.guard";
import {DashUsersComponent} from "./dash-users/dash-users.component";
import {NgModule} from "@angular/core";
import {UserProvider} from "../../services/user.service";
import {DashOverviewComponent} from "./dash-overview/dash-overview.component";
import {DashProjectsComponent} from "./dash-projects/dash-projects.component";
import {ProjectProvider} from "../../services/project.service";

const dashRoutes: Routes = [

  { path: '', component: DashboardComponent, canActivate:[AuthGuard],  children:[
      {path: '', redirectTo: "overview", pathMatch:"full"},
      {path: 'overview', component: DashOverviewComponent},
      {path: 'users',component: DashUsersComponent},
      {path: 'projects', component: DashProjectsComponent},
      {path: 'x', component: DashUsersComponent}
    ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(dashRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [UserProvider, ProjectProvider]
})
export class DashboardRoutingModule { }
