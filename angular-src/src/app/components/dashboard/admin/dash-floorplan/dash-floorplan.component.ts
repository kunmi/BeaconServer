import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FloorplanProvider} from "../../../../services/floorplan.service";
import {AuthService} from "../../../../services/auth.service";
import {ProjectProvider} from "../../../../services/project.service";
import {UserProvider} from "../../../../services/user.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog, MatSnackBar} from "@angular/material";
import {Values} from "../../../../models/Values";
import {Marker, ImgMapComponent, ShapeType} from "../../../plugin/ng2-img-map";
import {YesNoDialogComponent, YesNoDialogData} from "../../../util.component";
import {BeaconDialogComponent} from "../dash-beacon/beacon-dialog.component";
import {DialogFloorPlanNameComponent} from "./dialog-floorplan-name.component";


@Component({
  selector: 'app-dash-floorplan',
  templateUrl: './dash-floorplan.component.html',
  styleUrls: ['./dash-floorplan.component.css']
})


export class DashFloorplanComponent implements OnInit {
  can_delete = false;
  can_manage_project = false;
  presentProject: any;
  floorplan: any = {name: "default"};

  pins: Marker[] = [];

  changeList: Beacon[] = [];

  changed: boolean = false;


  floorplanId = "";
  projectID = "";

  @ViewChild('imgMap')
  floorplanContext: ImgMapComponent;

  @ViewChild('icon')
  icon: ElementRef;


  //floorplanContext: ImgMapComponent;
  deleteDialogData: YesNoDialogData = {
    data: {},
    message: "Are you sure you wan to remove this floorplan? if you do, you will lose all beacon assignments!!",
    title: "Remove floor plan from Project",
    yes: "Yes",
    no: "No"
  };

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private authService: AuthService,
              private projectProvider: ProjectProvider,
              private userProvider: UserProvider,
              private floorService: FloorplanProvider,
              private values: Values,
              private flashMessagesService: FlashMessagesService,
              public snackBarRef: MatSnackBar,
              public dialog: MatDialog) {
  }

  ngOnInit() {

    this.authService.getProfile().subscribe(result => {
      if (result) {
        if (result.user) {
          this.can_delete =
            result.user.roles.manage_users &&
            result.user.roles.manage_roles &&
            result.user.roles.manage_projects &&
            result.user.isadmin;

          this.can_manage_project = result.user.roles.manage_projects;

          if (!result.user.isadmin) {
            this.router.navigate(["../"], {relativeTo: this.activeRouter.parent});
          }

          this.activeRouter.params.subscribe(params => {

            this.floorplanId = params['floorplanid'];
            this.projectID = params['projectid'];
            this.floorService.getFloorPlan(params['floorplanid'], params['projectid']).subscribe(data => {
              if (data) {
                this.presentProject = data.data.project;
                this.floorplan = data.data.floorplan;

                for(let i = 0; i< this.floorplan.beacons.length; i++)
                {
                  let b = this.floorplan.beacons[i];
                  let m: Marker = new Marker(b.map.x, b.map.y);
                  m.size = 20;
                  m.data = b;
                  m.setAsComposite(this.icon.nativeElement,  ShapeType.Circle, 30, 30);
                  this.pins.push(m);
//                  this.floorplanContext.addMarker(m);
                }



              }
              else {

              }
            })

          });

        }
      }
      else {

      }


    });
  }

  floorplanAppeared(context: ImgMapComponent) {

    //this.floorplanContext = context;




  }

  onSelected(marker: Marker) {
    this.changed = true;


    var index = this.changeList.indexOf(marker.data, 0);
    if (index > -1) {
      this.changeList.splice(index, 1);
    }

    marker.data.map.x = marker.x;
    marker.data.map.y = marker.y;
    this.changeList.push(marker.data);
    console.log(this.changeList);
  }


  deleteFloorPlan() {

    let dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '450px',
      data: this.deleteDialogData
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.agree) {

          this.floorService.deleteFloorplanWithId(this.floorplan._id, this.presentProject._id).subscribe(data => {

            if (data) {
              if (data.success) {
                this.router.navigate(["projects", this.presentProject._id], {relativeTo: this.activeRouter.parent});
              }
              else {
                this.flashMessagesService.show(data.msg,
                  {cssClass: 'alert-danger', timeout: 3000});
              }
            }

          });


        }
      }
    });

  };


  addBeacon() {

    let dialogRef = this.dialog.open(BeaconDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {

        if(result)
        {
          let data = result.data;
          let m: Marker = new Marker(50, 50);
          m.size = 20;



          let beacon: Beacon = {
            map: {
              x: m.x,
              y: m.y,
              shape: ShapeType.Circle
            },
              type : data.type,
              uuid : data.uuid,
              major: data.major,
              minor: data.minor,
              ref: data.ref,
              txpower: data.txpower

          };

          m.data = beacon;
          m.setAsComposite(this.icon.nativeElement,  ShapeType.Circle, 30, 30);
          this.floorplanContext.addMarker(m);

          //this.changeList.push(beacon);

        }

    });
  }

  saveBeacon(){
    this.floorService.saveChangesOnFloorPlan(this.floorplanId, this.projectID, this.changeList).subscribe(result => {

          if(result.success)
          {
            this.snackBarRef.open("Changes Saved", "Close", {
              duration: 3000,
            });

          //  this.router.navigate(["projects", this.presentProject._id], {relativeTo: this.activeRouter.parent});
            console.log("YAY!");
          }


    });
  }

  changeName() {
    let dialogRef = this.dialog.open(DialogFloorPlanNameComponent, {
      width: '450px',
      data: {
        floorplanId: this.floorplanId,
        projectId: this.projectID,
        name: this.floorplan.name
      }
    });


    dialogRef.afterClosed().subscribe(result => {

      if (result) {
          if(result.data.success)
          {
            this.snackBarRef.open("Name saved", "Close", {
              duration: 3000,
            });

            this.floorplan.name = result.data.name;
          }
          else
          {
            this.flashMessagesService.show("An error occured "+result.msg,
              {cssClass: 'alert-danger', timeout: 3000});
          }
      }

    });
  }


  getBeaconSize()
  {
    if(this.floorplan.beacons)
      return this.floorplan.beacons.length;

    else
      return 0;
  }

}

export interface Beacon {
  _id? : String,
  map: {
    x: Number,
    y: Number,
    shape?:ShapeType
  }
    type: String,
    uuid: String,
    major?: String,
    minor?: String,
    ref?: String,
    txpower?: String

}
