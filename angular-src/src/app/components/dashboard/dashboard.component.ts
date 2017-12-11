import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
  
  <div class="row">
  <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
    <app-sidebar></app-sidebar>
  </nav>

  <div class="col-sm-9 offset-sm-0 col-md-10">
    <router-outlet></router-outlet>
  </div>
</div>
  
  
  `
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
