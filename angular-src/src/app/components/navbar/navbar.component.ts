import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
//needed for redirecting
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {Values} from "../../models/Values";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title : string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage: FlashMessagesService,
    private appInfo: Values
  ) { }


  ngOnInit() {
    this.title = this.appInfo.getTitle();

  }

  onLogoutClick(){

    this.authService.logout();
    this.flashMessage.show("You are logged out", {

      cssClass: 'alert-success',
      timeout: 300
    });
    this.router.navigate(['/login']);
    return false;
  }
}
