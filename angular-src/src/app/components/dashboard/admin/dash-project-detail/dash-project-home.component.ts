import { Component, OnInit } from '@angular/core';
import {ProjectData} from "../dash-projects/dash-projects.component";
import {AuthService} from "../../../../services/auth.service";
import {ProjectProvider} from "../../../../services/project.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserProvider} from "../../../../services/user.service";
import {User} from "../../../../models/User";
import {Observable} from "rxjs/Observable";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {
  InfoDialogComponent, InfoDialogData, YesNoDialogComponent,
  YesNoDialogData
} from "../../../util.component";
import {MatDialog,  MatSnackBar} from "@angular/material";
import {FlashMessagesService} from "angular2-flash-messages";
import {ProjectImageDialogComponent} from "./project-image-dialog.components";
import {Values} from "../../../../models/Values";

@Component({
  selector: 'app-dash-project-home',
  templateUrl: './dash-project-home.component.html',
  styleUrls: ['./dash-project-home.component.css']
})

export class DashProjectHomeComponent implements OnInit {


  presentProject: any;

  canManageProjects: string;
  title: string;
  description: string;
  email: string;

  selectable: boolean = true;
  projectUser: User[] = [];
  images = [];


  //Auto - complete
  users: User[] = [];
  filteredOptions: Observable<User[]>;
  myControl: FormControl = new FormControl();

  constructor(private authservice: AuthService,
              private projectProvider: ProjectProvider,
              private userProvider: UserProvider,
              private router: Router,
              private activeRouter: ActivatedRoute,
              public dialog: MatDialog,
              private flashMessagesService: FlashMessagesService,
              public snackBarRef: MatSnackBar,
              private values: Values) {

    authservice.getProfile().subscribe(result => {
      if (result) {
        if (result.user) {

          if (!result.user.isadmin) {
            this.router.navigate(["../"], {relativeTo: this.activeRouter.parent});
          }
          this.canManageProjects = result.user.roles.manage_projects;
          this.activeRouter.params.subscribe(params => {

            this.projectProvider.getProject(params['id']).subscribe(data => {
              this.presentProject = data.project;

              this.title = this.presentProject.name;
              this.description = this.presentProject.description;
              this.email = this.presentProject.email;

              this.images = this.presentProject.floorPlans;

              this.buildData(data.project.users);

            });

          });

        }

      }
      else {

      }
    });

  }


  ngOnInit() {
  }


  deleteDialogData: YesNoDialogData = {
    data: {},
    message: "Are you sure you wan to remove this user? if you do, their present token will be decommissioned",
    title: "Remove user from Project",
    yes: "Yes",
    no: "No"
  };

  remove(user: any): void {

    let dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '350px',
      data: this.deleteDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.agree) {
          this.projectProvider.removeFromProjects(user, this.presentProject).subscribe(data => {

            if (data) {
              if (data.success) {

                let index = this.projectUser.indexOf(user);
                if (index >= 0) {
                  this.projectUser.splice(index, 1);
                }
                this.snackBarRef.open("User removed", "Close", {
                  duration: 3000,
                });
              }
              else {
                this.flashMessagesService.show(data.msg,
                  {cssClass: 'alert-danger', timeout: 3000});
                return false;
              }
              return;
            }
            else {
              this.flashMessagesService.show('An error occurred',
                {cssClass: 'alert-danger', timeout: 3000});
              return false;
            }

          });
        }
        else {
        }
      }
    });


  }

  //Auto - complete

  filter(name: string): User[] {
    return this.users.filter(option =>
      option.username.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user: User): string {
    return user ? user.name : "";
  }


  addUsertoProject() {

    if (this.myControl.value == undefined) {

      let infoDialogData: InfoDialogData = {
        message: "No user selected, please select a user using the proivided input field",
        title: "Please select a user",
        yes: "okay"
      };


      this.dialog.open(InfoDialogComponent, {
        width: '350px',
        data: infoDialogData
      });
    }

    else {
      this.projectProvider.addToProject(this.myControl.value, this.presentProject).subscribe(result => {
        if (result) {
          if (result.success) {
            this.projectUser = [];
            this.buildData(result.users);
            this.snackBarRef.open("User added Successfully", "Close", {
              duration: 3000,
            });
            this.myControl.setValue({} as User);
            return;
          }
          else {
            this.flashMessagesService.show(result.msg,
              {cssClass: 'alert-warning', timeout: 3000});
            return true;
          }

        }
        else {
          this.flashMessagesService.show('An error occurred',
            {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      });
    }

  }

  buildData(allowed_users) {
    this.userProvider.getUsers().subscribe(allusers => {

      for (let y = 0; y < allowed_users.length; y++) {
        let current_user = allowed_users[y];
        for (let i = 0; i < allusers.length; i++) {
          if (current_user.user_id == allusers[i]._id) {
            let chosenUser = allusers[i];
            chosenUser.token = current_user.token;
            this.projectUser.push(allusers[i]);
            break;
          }
        }
      }

      if (this.canManageProjects) {
        this.users = allusers;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith({} as User),
            map(user => user && typeof user === 'object' ? user.name : user),
            map(name => name ? this.filter(name as string) : this.users.slice())
          );

      }


    });


  }

  showInfo(user: User) {
    let infoDialogData: InfoDialogData = {
      message: "The assigned API token for " + user.name + " for this project (" + this.presentProject.name + ") is: <br><br>" +
      "<h5>Token: </h5> " + user.token,
      title: "Token Info",
      yes: "okay"
    };


    this.dialog.open(InfoDialogComponent, {
      width: '450px',
      data: infoDialogData
    });

  }


  /*   IMAGE UPLOAD SECTION   */

  openImageUploadDialog(): void {

    let dialogRef = this.dialog.open(ProjectImageDialogComponent, {
      width: '500px',
      data: {id: this.presentProject._id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        if(result.success)
        {
          this.snackBarRef.open("Uploaded successful", "Close",{
            duration: 3000,
          });

          this.loadImages();

//          this.getUsersFromServer();

        }
      }
      console.log("The Dialog was closed");

    });
  }


  loadImages()
  {
      this.projectProvider.getImagesForProject(this.presentProject._id).subscribe(result => {

          if(result.success)
          {
            this.images = result.images;
          }

      });

  }

  showFloorPlan(id){
  this.router.navigate(['../', this.presentProject._id, "floorplan", id], {relativeTo : this.activeRouter});
  }

}
