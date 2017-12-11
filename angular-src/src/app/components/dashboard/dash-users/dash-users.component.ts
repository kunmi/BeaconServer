import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserProvider} from "../../../services/user.service";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-dash-users',
  templateUrl: './dash-users.component.html',
  styleUrls: ['./dash-users.component.css']
})

export class DashUsersComponent implements OnInit {

  selectedRowIndex: number = -1;

  displayedColumns = ['name', 'username', 'email'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private authService: AuthService,
    private userProvider: UserProvider) {


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

  ngOnInit() {

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

}

export interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
}
