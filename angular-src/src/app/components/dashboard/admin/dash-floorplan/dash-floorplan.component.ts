import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FloorplanProvider} from "../../../../services/floorplan.service";
import {AuthService} from "../../../../services/auth.service";
import {ProjectProvider} from "../../../../services/project.service";
import {UserProvider} from "../../../../services/user.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {MatSnackBar} from "@angular/material";
import {Values} from "../../../../models/Values";
import {Marker, ImgMapComponent} from "../../../plugin/ng2-img-map";


@Component({
  selector: 'app-dash-floorplan',
  templateUrl: './dash-floorplan.component.html',
  styleUrls: ['./dash-floorplan.component.css']
})
export class DashFloorplanComponent implements OnInit {

  presentProject : any;
  floorplan : any = { name : "default"};

  pins : Marker[] = [];


  floorplanContext: ImgMapComponent;

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private authService : AuthService,
    private projectProvider: ProjectProvider,
    private userProvider: UserProvider,
    private floorService: FloorplanProvider,
    private values: Values,
    private flashMessagesService: FlashMessagesService,
    public snackBarRef: MatSnackBar) { }

  ngOnInit() {

  this.authService.getProfile().subscribe(result=>{
    if(result)
    {
        if(result.user)
        {

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

    this.pins.push(context.createMarker([0, 0]);
    this.pins.push (context.createMarker([50, 50]);
    this.pins.push(context.createMarker([75, 75]).setData("baby"));

    context.draw();

  }


  onSelected(marker : Marker)
  {
    console.log(marker);
  }




}
