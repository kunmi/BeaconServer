import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <!--The content below is only a placeholder and can be replaced.-->
<app-navbar></app-navbar>

<div class="container-fluid" style="padding-top: 10px; padding-bottom: 20px">
  <flash-messages></flash-messages>
  <router-outlet></router-outlet>
</div>

<app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'app';
}
