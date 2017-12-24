import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserProvider} from "../../../services/user.service";
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from "@angular/material";
import {RegisterComponent} from "../register/register.component";
import {FlashMessagesService} from "angular2-flash-messages";


@Component({
  selector: 'app-dash-users',
  templateUrl: './dash-users.component.html',
  styleUrls: ['./dash-users.component.css']
})

export class DashUsersComponent implements OnInit {

  selectedRowIndex: number = -1;

  displayedColumns = ['name', 'username', 'email'];
  dataSource: MatTableDataSource<UserData>;

  canManageUsers = false;
  presentUser : any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService: AuthService,
    private userProvider: UserProvider,
    public dialog: MatDialog,
    private flashMessagesService: FlashMessagesService,
    public snackBarRef: MatSnackBar) {

    this.getUsersFromServer();
    this.authService.getProfile().subscribe(result=>{
      this.presentUser = result.user;
      if(result.user.roles.manage_users)
      {
        this.canManageUsers = true;
      }
    });

  }

  ngOnInit() {

  }

  getUsersFromServer(){
    this.userProvider.getUsers().subscribe(result=>{

      const users: UserData[] = [];

      result.forEach(element => {
        const user: UserData = {
          id: element._id.toString(),
          name: element.name.toString(),
          username: element.username.toString(),
          email: element.email.toString()
        };
        users.push(user);
      });

      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
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

  openCreateUserDialog(): void{

    let dialogRef = this.dialog.open(RegisterComponent, {
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
          this.getUsersFromServer();
        }
        else {



        }
      }
      console.log("The Dialog was closed");

    });

  }

  openEditUserDialog(row): void{

    const presentUserId = row.id;

    let dialogRef = this.dialog.open(RegisterComponent, {
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
          this.getUsersFromServer();
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

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
}
