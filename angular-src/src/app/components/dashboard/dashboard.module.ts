import { NgModule } from '@angular/core';
import {DashHomeComponent} from "./dash-home/dash-home.component";
import {DashUsersComponent} from "./dash-users/dash-users.component";
import {DashOverviewComponent} from "./dash-overview/dash-overview.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HttpClient} from '@angular/common/http'
import {FlashMessagesModule} from "angular2-flash-messages";
import {ProfileComponent} from "./profile/profile.component";
import {DashboardComponent} from "./dashboard.component";
import {CommonModule} from "@angular/common";

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {RegisterComponent} from "./dash-users/register/register.component";
import {YesNoDialogComponent} from "../util.component";
import { DashProjectsComponent } from './dash-projects/dash-projects.component';
import {DashProjectDialogComponents} from "./dash-projects/dash-project-dialog.components";

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class SharedMaterialModule {
}

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
    DashProjectsComponent,
    DashProjectDialogComponents
  ],
  entryComponents:[YesNoDialogComponent, DashProjectDialogComponents],
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



