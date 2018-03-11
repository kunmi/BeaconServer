import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {UserProvider} from "../../../../services/user.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ProjectProvider} from "../../../../services/project.service";
import {AuthService} from "../../../../services/auth.service";
import {DashProjectDialogComponents} from "./dash-project-dialog.components";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dash-projects',
  templateUrl: './dash-projects.component.html',
  styleUrls: ['./dash-projects.component.css']
})
export class DashProjectsComponent implements OnInit {

  selectedRowIndex: number = -1;

  displayedColumns = ['name', 'email', 'description'];
  dataSource: MatTableDataSource<ProjectData>;

  canManageProject = false;
  presentUser : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService : AuthService,
    private userProvider: UserProvider,
    private projectProvider: ProjectProvider,
    private router: Router,
    private activeRouter: ActivatedRoute,
    public dialog: MatDialog,
    private flashMessagesService: FlashMessagesService,
    public snackBarRef: MatSnackBar) {

    this.getProjectFromServer();
    this.authService.getProfile().subscribe(result=>{
      this.presentUser = result.user;
      this.canManageProject = result.user.roles.manage_projects;
    });

  }

  ngOnInit() {

  }

  getProjectFromServer(){
    this.projectProvider.getProjects().subscribe(result=>{

      const projects: ProjectData[] = [];

      result.forEach(element => {
        const project: ProjectData = {
          id: element._id.toString(),
          name: element.name.toString(),
          email: element.email.toString(),
          description: element.description.toString()
        };
        projects.push(project);
      });

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(projects);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });

  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  highlight(row){
    this.selectedRowIndex = row.id;
  }

  openCreateProjectDialog(): void{


    let dialogRef = this.dialog.open(DashProjectDialogComponents, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        if(result.success)
        {
          this.snackBarRef.open("User Created Successfully", "Close",{
            duration: 3000,
          });
          this.getProjectFromServer();
        }
        else {



        }
      }
      console.log("The Dialog was closed");

    });


  }

  openEditProjectDialog(row): void{


    const presentUserId = row.id;

    let dialogRef = this.dialog.open(DashProjectDialogComponents, {
      width: '500px',
      data: {id: presentUserId}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        if(result.success)
        {
          this.snackBarRef.open("Updated Successfully", "Close",{
            duration: 3000,
          });
          this.getProjectFromServer();
        }
        else if(result.navigate){
          this.router.navigate(["projects", result.id],{relativeTo: this.activeRouter.parent});
        }
        else
        {
          this.flashMessagesService.show('An Error Occurred.  '+result.message,
            {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
      }

      console.log("The Dialog was closed");

    });


  }
}

export interface ProjectData {
  id: string;
  name: string;
  email: string;
  description: string;
}
