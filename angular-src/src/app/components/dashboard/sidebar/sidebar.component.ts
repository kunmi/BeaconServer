import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {UserProvider} from "../../../services/user.service";
import {ProjectProvider} from "../../../services/project.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isadmin = false;

  projects = [];


  constructor(
    private router: Router,
    private authService: AuthService,
    private projectProvider: ProjectProvider
  ) {
    this.authService.getProfile().subscribe(result=>{
        this.isadmin = result.user.isadmin;


      this.projectProvider.getProjectsForUser(result.user._id).subscribe(data => {

        this.projects = data;

      })



    });



  }

  getFloorPlanName(floorplan, index)
  {
    if(floorplan.name)
    {
      return floorplan.name
    }
    else
      return "Floorplan "+ index;
  }

  ngOnInit() {
  }

}
