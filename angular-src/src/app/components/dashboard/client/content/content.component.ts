import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectProvider} from "../../../../services/project.service";
import {FloorplanProvider} from "../../../../services/floorplan.service";
import {Values} from "../../../../models/Values";
import {UserProvider} from "../../../../services/user.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {AuthService} from "../../../../services/auth.service";
import {ContentProvider} from "../../../../services/content.service";
import {Marker, Polygon, ShapeType} from "../../../plugin/ng2-img-map";
import {UserData} from "../../admin/dash-users/dash-users.component";
import {BeaconDialogComponent} from "../../admin/dash-beacon/beacon-dialog.component";
import {DialogViewContentComponent} from "./view-content.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  contents:ContentData[] = [];
  presentUser = null;
  project_id = null;

  selectedRowIndex: number = -1;

  displayedColumns = ['title', 'body', 'floorplan-name','published'];
  dataSource: MatTableDataSource<ContentData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private authService: AuthService,
              private projectProvider: ProjectProvider,
              private userProvider: UserProvider,
              private floorService: FloorplanProvider,
              private contentService: ContentProvider,
              private values: Values,
              private flashMessagesService: FlashMessagesService,
              public snackBarRef: MatSnackBar,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(result => {
      if (result) {
        if (result.user) {

          this.presentUser = result.user;

          this.activeRouter.params.subscribe(params => {
            this.project_id = params['id'];

            this.contentService.getContentsFromProject(this.project_id).subscribe(data=>{

              if(data.success)
              {

                data.contents.forEach(element => {
                  const content: ContentData = {
                    _id: element._id.toString(),
                    title: element.title.toString(),
                    body: element.body.toString(),
                    published: element.published.toString(),
                    floorplan_name: element.floorplan_name,
                    floorplan_id: element.floorplan_id,
                    beacons: element.beacons,
                    area: element.areas
                  };
                  this.contents.push(content);
                });

                // Assign the data to the data source for the table to render
                this.dataSource = new MatTableDataSource(this.contents);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              }
              else
              {
                this.flashMessagesService.show("An Error occured " + data.msg,
                  {cssClass: 'alert-danger', timeout: 3000});
              }


            });

          });

        }
      }
      else {
        this.flashMessagesService.show("An Error occured " + result.msg,
          {cssClass: 'alert-danger', timeout: 3000});
      }


    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  highlight(row){
    this.selectedRowIndex = row.id;
  }

  showContentDetails(c) {



    let dialogRef = this.dialog.open(DialogViewContentComponent, {
      width: '450px',
      data: {contentid: c._id, projectId: this.project_id}
    });

  }

}

export interface ContentData {
  _id: string;
  title: string;
  body: string;
  published: string;
  beacons?: Array<any>;
  area?: Array<any>;
  floorplan_name: string,
  floorplan_id: string
}
