import {Component, Input, NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {BeaconData} from "./bar-horizontal-stacked.component";


@Component({
  selector: 'stat-piechart',
  template: `
    <ngx-charts-advanced-pie-chart
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [gradient]="gradient"
      [animations]="true"
      label="Total Beacons"
      
      
      >
    </ngx-charts-advanced-pie-chart>
  `
})

export class  PieAdvancedComponentExport implements OnInit{

  multi:BeaconData[]=[];

  setDate(data:BeaconData[]){

    this.multi = data;
//    this.multi = [...this.multi];
    //Object.assign(this, { data });
  }



  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Floor plans';
  showYAxisLabel = true;
  yAxisLabel = 'Beacon Count';


  colorScheme = {
    domain: ['#a8385d', '#7aa3e5', '#a27ea8', '#aae3f5', '#adcded', '#a95963', '#8796c0', '#7ed3ed', '#50abcc', '#ad6886']
  };

  constructor() {
    //Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit(): void {
  }
}
