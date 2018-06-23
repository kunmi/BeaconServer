import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FloorplanProvider} from "../../../../services/floorplan.service";
import {AuthService} from "../../../../services/auth.service";
import {ProjectProvider} from "../../../../services/project.service";
import {UserProvider} from "../../../../services/user.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatDialog, MatSnackBar} from "@angular/material";
import {Values} from "../../../../models/Values";
import {Marker, ImgMapComponent, ShapeType, Polygon} from "../../../plugin/ng2-img-map";
import {YesNoDialogComponent, YesNoDialogData} from "../../../util.component";
import {BeaconDialogComponent} from "../dash-beacon/beacon-dialog.component";
import {DialogFloorPlanNameComponent} from "./dialog-floorplan-name.component";
import {DialogContentAreaNameComponent} from "./dialog-contentarea-name.component";


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
  polygons: Polygon[] = [];

  //changeList: Beacon[] = [];


  changed: boolean = false;


  floorplanId = "";
  projectID = "";

  @ViewChild('imgMap')
  floorplanContext: ImgMapComponent;

  @ViewChild('icon')
  icon: ElementRef;

  @ViewChild('icon2')
  icon2: ElementRef;


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



        }
      }
      else {

      }


    });
  }

  ngAfterViewInit() {

    this.activeRouter.params.subscribe(params => {

      this.floorplanId = params['floorplanid'];
      this.projectID = params['projectid'];
      this.floorService.getFloorPlan(params['floorplanid'], params['projectid']).subscribe(data => {
        if (data) {

          this.presentProject = data.data.project;
          this.floorplan = data.data.floorplan;

          for (let i = 0; i < this.floorplan.beacons.length; i++) {
            let b = this.floorplan.beacons[i];
            let m: Marker = new Marker(b.map.x, b.map.y);
            m.size = 20;
            m.data = b;


            let icon = "";

            if(b.type.toLowerCase() === "iBeacon".toLowerCase())
              icon = this.icon.nativeElement;
            else
              icon = this.icon2.nativeElement;
            
            m.setAsComposite(icon, ShapeType.Circle, 30, 30);

            this.pins.push(m);
//                  this.floorplanContext.addMarker(m);
          }

          for(let i=0; i< this.floorplan.areas.length; i++)
          {
            let area = this.floorplan.areas[i];
            let p: Polygon = new Polygon();
            p.setVertices(area.coordinates);
            p.data = area;
            this.polygons.push(p);
          }


        }
        else {

        }
      })

    });


  }

  floorplanAppeared(context: ImgMapComponent) {

    //this.floorplanContext = context;


  }

  onMarkerChanged(index) {
    this.changed = true;


    let marker = this.pins[index];
    marker.data.map.x = marker.x;
    marker.data.map.y = marker.y;

    //console.log(this.changeList);
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

      if (result) {
        if (result.action == "add") {
          let data = result.data;
          let m: Marker = new Marker(50, 50);
          m.size = 20;

          let beacon: Beacon = {
            map: {
              x: m.x,
              y: m.y,
              shape: ShapeType.Circle
            },
            type: data.type,
            ref: data.ref
          };

          if (data.type == "iBeacon") {
            beacon.uuid = data.uuid;
            beacon.major = data.major;
            beacon.minor = data.minor;
          }
          else {
            beacon.nameSpaceId = data.nameSpaceId;
            beacon.instanceId = data.instanceId;
          }

          m.data = beacon;
          m.setAsComposite(this.icon.nativeElement, ShapeType.Circle, 30, 30);
          this.floorplanContext.addMarker(m);

          //this.changeList.push(beacon);

        }
      }


    });
  }

  saveBeacon() {

    let beacons: Beacon[] = [];
    let areas: any[] = [];
    this.pins.forEach((marker, index) => {

      beacons.push(marker.data);

    });

    this.polygons.forEach((polygon, index)=>{
        let c = polygon.data;
        c.coordinates = polygon.getVertices();
        areas.push(c);
      }
    );

    this.floorService.saveChangesOnFloorPlan(this.floorplanId, this.projectID, {beacons: beacons, areas: areas}).subscribe(result => {

      if (result.success) {
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
        if (result.data.success) {
          this.snackBarRef.open("Name saved", "Close", {
            duration: 3000,
          });

          this.floorplan.name = result.data.name;
        }
        else {
          this.flashMessagesService.show("An error occured " + result.msg,
            {cssClass: 'alert-danger', timeout: 3000});
        }
      }

    });
  }


  getBeaconSize() {
    if (this.floorplan.beacons)
      return this.floorplan.beacons.length;

    else
      return 0;
  }


  onPolygonChanged(index) {
    this.changed = true;
  }


  showBeaconDetails(index) {

    let dialogRef = this.dialog.open(BeaconDialogComponent, {
      width: '450px',
      data: {beacon: this.pins[index].data, index: index}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        if (result.action == "delete") {

          if (result.data._id) {
            this.floorService.deleteBeaconFromFloorPlan(this.floorplanId, this.projectID, result.data._id).subscribe((data) => {
              if (data.success) {

                this.snackBarRef.open("Beacon Removed", "Close", {
                  duration: 3000,
                });


                this.pins.splice(result.index, 1);
                this.floorplanContext.draw();

              }
              else {
                this.flashMessagesService.show("An Error occured " + data.msg,
                  {cssClass: 'alert-danger', timeout: 3000});
              }
            });
          }
          else {

            this.pins.splice(result.index, 1);
            this.floorplanContext.draw();
          }


        }

        if (result.action == "edit") {
          this.pins[result.index].data = result.data;
          this.changed = true;
        }

      }

    });

  }

  showPolygonDetails(index){
    this.changed = true;

    let dialogRef = this.dialog.open(DialogContentAreaNameComponent, {
      width: '450px',
      data: {
        index: index,
        area: this.polygons[index].data
      }
    });


    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.polygons[result.index].data = result.data.area;
      }

      //this.contentAreaChangeList.push(this.polygons[index]);
    });
  }

}

export interface Beacon {
  _id?: String,
  map: {
    x: Number,
    y: Number,
    shape?: ShapeType
  }
  type: String,
  uuid?: String,
  major?: String,
  minor?: String,
  ref?: String,
  txPower?: String,
  nameSpaceId?: String,
  instanceId?: String,

}

export interface ContentArea{
  _id?: String,
  name?: String,
  coordinates: any[]
}
