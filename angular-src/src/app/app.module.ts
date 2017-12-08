import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {FlashMessagesModule} from "angular2-flash-messages";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';

import {ValidateService} from "./services/validate.service";
import {AuthService} from "./services/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import { FooterComponent } from './components/footer/footer.component';
import {Values} from "./models/Values";


import {AppRoutingModule} from './app-routing.module';
import {DashboardModule} from "./components/dashboard/dashboard.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, Values],
  bootstrap: [AppComponent]
})


export class AppModule { }
