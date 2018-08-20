import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule, HttpClient } from '@angular/common/http'
import {FlashMessagesModule} from "angular2-flash-messages";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

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
    HomeComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, Values],
  bootstrap: [AppComponent]
})


export class AppModule { }
