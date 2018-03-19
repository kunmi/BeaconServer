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


@Component({
  selector: 'app-dash-floorplan',
  templateUrl: './dash-floorplan.component.html',
  styleUrls: ['./dash-floorplan.component.css']
})
export class DashFloorplanComponent implements OnInit {

  can_delete = false;
  presentProject : any;
  floorplan : any = { name : "default"};

  pins : Marker[] = [];

  //@ViewChild('imgMap')
  //imgMap: ImgMapComponent;

  @ViewChild('icon')
  icon: ElementRef;

  smoothIcon;



  floorplanContext: ImgMapComponent;
  deleteDialogData: YesNoDialogData = {
    data: {},
    message: "Are you sure you wan to remove this floorplan? if you do, you will lose all beacon assignments!!",
    title: "Remove floor plan from Project",
    yes: "Yes",
    no: "No"
  };

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private authService : AuthService,
    private projectProvider: ProjectProvider,
    private userProvider: UserProvider,
    private floorService: FloorplanProvider,
    private values: Values,
    private flashMessagesService: FlashMessagesService,
    public snackBarRef: MatSnackBar,
    public dialog: MatDialog) { }

  ngOnInit() {

  this.authService.getProfile().subscribe(result=>{
    if(result)
    {
        if(result.user)
        {
          this.can_delete =
            result.user.roles.manage_users&&
            result.user.roles.manage_roles&&
            result.user.roles.manage_projects&&
            result.user.isadmin;

          if (!result.user.isadmin) {
            this.router.navigate(["../"], {relativeTo: this.activeRouter.parent});
          }

          this.activeRouter.params.subscribe(params => {

            this.floorService.getFloorPlan(params['floorplanid'],params['projectid']).subscribe(data =>{
              if(data)
              {
                  this.presentProject = data.data.project;
                  this.floorplan = data.data.floorplan;
              }
              else
              {

              }
            })

          });

        }
    }
    else {

    }


  });
  }

  floorplanAppeared(context : ImgMapComponent)
  {


    this.floorplanContext = context;
    context.imageSmoothingQuality = "high";
    context.imageSmoothingEnabled = true;
    context.draggable = true;

    let m = context.createMarker([51, 52]);
    m.size = 49;



    m.setAsComposite(this.icon.nativeElement, ShapeType.Circle, 40, 40);

    //this.pins.push(context.createMarker([0, 0]);
    this.pins.push (m);
    //this.pins.push(context.createMarker([75, 75]).setData("baby"));

    context.draw();

  }

  onSelected(marker : Marker)
  {
    console.log(marker);
  }

  deleteFloorPlan(){

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
    };

  };
}

