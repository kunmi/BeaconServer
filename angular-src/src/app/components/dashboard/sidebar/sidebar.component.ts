import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {UserProvider} from "../../../services/user.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isadmin = false;
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.authService.getProfile().subscribe(result=>{
        this.isadmin = result.user.isadmin;
    });


  }

  ngOnInit() {
  }

}
