import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProfileComponent} from "./components/dashboard/profile/profile.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule'},
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  //{ path: '**', component: ProfileComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
