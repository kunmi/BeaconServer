import {Component, OnInit, ViewChild} from '@angular/core';
import {Values} from "../../../../models/Values";
import {ProjectProvider} from "../../../../services/project.service";
import {MatDialog, MatSnackBar} from "@angular/material";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../../services/auth.service";
import {UserProvider} from "../../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FloorplanProvider} from "../../../../services/floorplan.service";
import {ContentProvider} from "../../../../services/content.service";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BarData, BarHorizontalStackedComponentExport, BeaconData} from "../statistics/bar-horizontal-stacked.component";
import {PieAdvancedComponentExport} from "../statistics/pie-chart.component";

var single = [
  {
    "name": "Germany",
    "value": 8940000
  },
  {
    "name": "USA",
    "value": 5000000
  },
  {
    "name": "France",
    "value": 7200000
  }
];

@Component({
  selector: 'app-dash-overview',
  templateUrl: './dash-overview.component.html',
  styleUrls: ['./dash-overview.component.css']
})
export class DashOverviewComponent implements OnInit {

  presentProject:any = "";
  presentUser: any = "";
  token = "";

  is_project = false;
  projectId = "";
  project_name = "";
  project_description = "";
  access_token_for_project = "";

  number_ibeacons = 0;
  number_eddystone = 0;

  number_of_content = 0;
  number_of_floorplan = 0;



  // CHARTS //
  barData: BarData[] = [];
  pieData:BeaconData[] = [];

  @ViewChild('barchart')
  private barChart:BarHorizontalStackedComponentExport;

  @ViewChild('piechart')
    private piechart:PieAdvancedComponentExport;

  view: any[] = [500, 300];

  constructor(private authservice: AuthService,
              private activeRouter: ActivatedRoute,
              private authService: AuthService,
              private projectProvider: ProjectProvider,
              private userProvider: UserProvider,
              private floorService: FloorplanProvider,
              private values: Values,
              private flashMessagesService: FlashMessagesService,
              private contentProvider: ContentProvider) {
    authservice.getProfile().subscribe(result => {
      if (result) {
        if (result.user) {
          this.presentUser = result.user;



        }
      }
    });
  }

  ngOnInit() {

    this.activeRouter.params.subscribe(params => {

      this.barData = [];
      this.pieData = [];

      this.number_ibeacons = 0;
      this.number_eddystone = 0;

      //this.number_of_content = 0;
      this.number_of_floorplan = 0;


      if(params['id'])
      {

        this.is_project = true;
        this.projectId = params['id'];

        this.projectProvider.getProjectData(this.projectId).subscribe(result => {

          if(result.success)
          {

            this.project_name = result.project.name;
            this.project_description = result.project.description;

            result.project.users.forEach(user=>{

              if(user.user_id === this.presentUser._id){
                this.access_token_for_project = user.token;
              }

            });


            if(result.project.floorPlans.length > 0)
            {


              result.project.floorPlans.forEach(fp=>{

                this.number_of_floorplan++;

                let data:BarData = {
                  name: fp.name,
                  series: []
                };


                let fp_ibeacon_num = 0;
                let fp_eddy_num = 0;

                fp.beacons.forEach(b=>{

                  if(b.type == "iBeacon") {
                    fp_ibeacon_num++;
                    this.number_ibeacons++;
                  }
                  else{
                    this.number_eddystone++;
                    fp_eddy_num++;
                  }
                });

                let bd: BeaconData = {
                  name: "iBeacon",
                  value: fp_ibeacon_num
                };

                let ed: BeaconData = {
                  name: "Eddystone",
                  value: fp_eddy_num
                };

                data.series.push(bd);
                data.series.push(ed);

                this.barData.push(data);

              });

              this.barChart.setData(this.barData);

              let ibp:BeaconData = {
                "name": "iBeacon",
                "value": this.number_ibeacons
              };

              let edp:BeaconData = {
                "name": "Eddystone",
                "value": this.number_eddystone
              };

              this.pieData.push(ibp);
              this.pieData.push(edp);

              this.piechart.setDate(this.pieData);
            }
            else
            {


              let d:BarData = {
                name: " ",
                series: []
              };


              let ibp:BeaconData = {
                "name": "iBeacon",
                "value": 0
              };

              let edp:BeaconData = {
                "name": "Eddystone",
                "value": 0
              };

              this.pieData.push(ibp);
              this.pieData.push(edp);

              this.barChart.setData([d]);
              this.piechart.setDate(this.pieData);

            }


          }
        });

        this.contentProvider.getContentsFromProject(this.projectId).subscribe(result => {
          if(result.success)
            this.number_of_content = result.contents.length;
        });


      }

    });

  }


}
