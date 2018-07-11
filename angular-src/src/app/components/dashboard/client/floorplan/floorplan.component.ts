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
import {BeaconDialogComponent} from "../../admin/dash-beacon/beacon-dialog.component";
import {DialogContentAreaNameComponent} from "../../admin/dash-floorplan/dialog-contentarea-name.component";
import {DialogAddContentComponent} from "./dialog-add-content.component";


@Component({
  selector: 'app-client-floorplan',
  templateUrl: './floorplan.component.html'
})


export class ClientFloorplanComponent implements OnInit {
  presentProject: any;
  floorplan: any = {name: "default"};

  pins: Marker[] = [];
  polygons: Polygon[] = [];

  presentUser: any = "";

  changed: boolean = false;


  floorplanId = "";
  projectID = "";

  @ViewChild('imgMap')
  floorplanContext: ImgMapComponent;

  @ViewChild('icon')
  icon: ElementRef;

  @ViewChild('icon2')
  icon2: ElementRef;


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

          this.presentUser = result.user;

          this.activeRouter.params.subscribe(params => {

            this.floorplanId = params['floorplanId'];
            this.projectID = params['id'];
            this.floorService.getFloorPlan(this.floorplanId , this.projectID ).subscribe(data => {
              if (data) {
                this.presentProject = data.data.project;

                let userAllowed = false;
                this.presentProject.users.forEach((user, index) =>{
                  if(user.user_id === this.presentUser._id)
                  {
                    userAllowed = true;
                  }
                });

                if (!userAllowed) {
                  this.router.navigate(["../"], {relativeTo: this.activeRouter.parent});
                }




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
      }
      else {

      }


    });
  }

  getBeaconSize() {
    if (this.floorplan.beacons)
      return this.floorplan.beacons.length;
    else
      return 0;
  }


  showBeaconDetails(index) {


    let beacons = [];

    beacons.push(this.pins[index].data);

    let dialogRef = this.dialog.open(DialogAddContentComponent, {
      width: '650px',
      data: {
        beacons: beacons,
        index: index,
        projectId: this.projectID,
        floorplanId: this.floorplanId}
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        if(result.success)
        {
          this.snackBarRef.open("Message Published successfully", "Close",{
            duration: 3000,
          });
        }
      }

    });

  }

  showPolygonDetails(index){

    this.changed = true;

    let p = this.polygons[index];
    let beacons = [];

    for(let i=0; i< this.pins.length; i++){

      let b = this.pins[i];

      let coords = [b.x,b.y];
      if(p.isPointInPolygon(coords))
      {
        beacons.push(b.data);
      }

    }

    let dialogRef = this.dialog.open(DialogAddContentComponent, {
      width: '650px',
      data: {
        index: index,
        area: this.polygons[index].data,
        projectId: this.projectID,
        floorplanId: this.floorplanId,
        beacons: beacons
      }
    });


    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        if(result.success)
        {
          this.snackBarRef.open("Message Published successfully", "Close",{
            duration: 3000,
          });
        }
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
