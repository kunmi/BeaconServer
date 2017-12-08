import { NgModule } from '@angular/core';
import {DashHomeComponent} from "./dash-home/dash-home.component";
import {DashUsersComponent} from "./dash-users/dash-users.component";
import {DashOverviewComponent} from "./dash-overview/dash-overview.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FlashMessagesModule} from "angular2-flash-messages";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    DashHomeComponent,
    DashOverviewComponent,
    DashUsersComponent,
    ProfileComponent
  ],
  imports: [
    DashboardRoutingModule,
   CommonModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule

  ]
})


export class DashboardModule { }
