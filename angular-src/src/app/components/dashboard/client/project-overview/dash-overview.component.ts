import { Component, OnInit } from '@angular/core';
import {Values} from "../../../../models/Values";
import {ProjectProvider} from "../../../../services/project.service";
import {MatDialog, MatSnackBar} from "@angular/material";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../../services/auth.service";
import {UserProvider} from "../../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dash-overview',
  templateUrl: './dash-overview.component.html',
  styleUrls: ['./dash-overview.component.css']
})
export class DashOverviewComponent implements OnInit {

  presentProject:any = "";
  presentUser: any = "";
  token = "";


  constructor(private authservice: AuthService,
              private projectProvider: ProjectProvider,
              private userProvider: UserProvider,
              private router: Router,
              private activeRouter: ActivatedRoute,
              public dialog: MatDialog,
              private flashMessagesService: FlashMessagesService,
              public snackBarRef: MatSnackBar,
              private values: Values
              ) {

    authservice.getProfile().subscribe(result => {
      if (result) {
        if (result.user) {


          this.presentUser = result.user;
          this.activeRouter.params.subscribe(params => {

            /*
            this.projectProvider.getProject(params['id']).subscribe(data => {
              this.presentProject = data.project;

              let userAllowed = false;
              this.presentProject.users.forEach((user, index) =>{
                  if(user.user_id === this.presentUser._id)
                  {
                    userAllowed = true;
                    this.token = user.token;
                  }
              });

              if (!userAllowed) {
                this.router.navigate(["../"], {relativeTo: this.activeRouter.parent});
              }

            }); */

          });

        }

      }
      else {

      }
    });

  }
  ngOnInit() {
  }


  showFloorPlan(id){
    //project/'+project._id+'/floorplan/'+floorPlan._id
    this.router.navigate(['../', "floorplan", id], {relativeTo : this.activeRouter});
  }
}
