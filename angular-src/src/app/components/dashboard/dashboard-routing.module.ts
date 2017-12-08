import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {DashHomeComponent} from "./dash-home/dash-home.component";
import {AuthGuard} from "../../guards/auth.guard";
import {DashUsersComponent} from "./dash-users/dash-users.component";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./profile/profile.component";
import {UserProvider} from "../../services/user.service";

const dashRoutes: Routes = [

  { path: '', component: DashboardComponent, canActivate:[AuthGuard],  children:[
      {path: '', redirectTo: 'overview',
        pathMatch: 'full'},
      {path: 'users',component: DashUsersComponent},
      {path: 'overview', component: DashHomeComponent}
    ]},
];


@NgModule({
  imports: [
    RouterModule.forChild(dashRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [UserProvider]
})
export class DashboardRoutingModule { }
