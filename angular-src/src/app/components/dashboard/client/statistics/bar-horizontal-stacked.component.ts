import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'stat-horizontal-barchart',
  template: `
    <ngx-charts-bar-horizontal-2d
      [view]="view"
      [scheme]="colorScheme"
      [results]="multi"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [showDataLabel]="true"
      (select)="onSelect($event)">
    </ngx-charts-bar-horizontal-2d>
  `
})

export class  BarHorizontalStackedComponentExport implements OnInit{

   multi:BarData[];



   setData(data:BarData[]){

     this.multi = data;
//     this.multi = [... this.multi];
//    this.multi.push(data);
   // Object.assign(this, { data });
  }

  view: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';


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


export interface BarData
{
 name:String;
 series:BeaconData[];

}

export interface BeaconData {
  name:String;
  value:number;
}
