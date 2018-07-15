import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {ValidateService} from "../../../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Project} from "../../../../models/project";
import {ProjectProvider} from "../../../../services/project.service";
import {UserProvider} from "../../../../services/user.service";
import {Observable} from "rxjs/Observable";
import {FloorplanProvider} from "../../../../services/floorplan.service";
import {ContentProvider} from "../../../../services/content.service";
import {DialogFloorPlanNameComponent} from "../../admin/dash-floorplan/dialog-floorplan-name.component";

@Component({
  selector: 'dialog-view-content',
  template: `<main>
    <div class="container">

     
      
      <div>

        <mat-tab-group >

          <br/>

          <mat-tab label="Message">

            <form  id="form" >

              <div>
                
                <br/>
                <br/>

                <h4>Post Message</h4>

                <mat-form-field class="input-full-width">
                  <input matInput placeholder="title" [(ngModel)]="title"  name="title"  id="title" required="required" [disabled]="true" >
                </mat-form-field>

                <mat-form-field class="input-full-width">
                  <textarea matInput placeholder="Message Here" [(ngModel)]="body"  name="body"  id="body" required="required" [disabled]="true" ></textarea>
                </mat-form-field>

                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Published" [(ngModel)]="created"  name="published"  id="published" required="required" [disabled]="true" >
                </mat-form-field>

                <br/>
                
              </div>

            </form>

          </mat-tab>

          <mat-tab label="Details">

            <div>
              <br/>
              <br/>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Floorplan Name" [(ngModel)]="floorplan_name"  name="type"  id="type" [disabled]="true" >
              </mat-form-field>

              <mat-form-field class="input-full-width" *ngIf="has_content_area">
                <input matInput placeholder="Content Area Name" [(ngModel)]="area_name"  name="type"  id="type" [disabled]="true" >
              </mat-form-field>

             
              <h4>Beacons:</h4>
              <div style="max-height: 300px; overflow-y: scroll">

                <ul *ngFor="let b of beacons; let i = index">
                  <li> <p>{{b}}</p> </li>
                </ul>
                
              </div>
              

            </div>
            
            <br/>
            <br/>
            
          
          </mat-tab>
          

         
        </mat-tab-group>
        
      </div>

      
    </div>

  </main>`
})

export class DialogViewContentComponent implements OnInit {


  contentId = "";

  title: "";
  body: "";
  created: "";


  area_name = "";
  floorplan_name = "";

  has_content_area = false

  floorplanId = "";
  projectId = "";

  beacons =[];

  content = null;

  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService,
              private userProvider: UserProvider,
              private floorplanProvider: FloorplanProvider,
              private contentProvider: ContentProvider,
              private authService: AuthService,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogViewContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {


    if (this.data) {

      this.projectId = this.data.projectId;

      this.contentId = this.data.contentid;

      this.contentProvider.getContentDetails(this.contentId).subscribe(result=>{

        if(result.success)
        {
          let c = result.content;

          this.content = c;

          this.title = c.title;
          this.body = c.body;
          this.created = c.created;


          if(c.data.area !== ""){
            this.area_name = c.data.area;
            this.has_content_area = true;

          }

          this.floorplan_name = c.data.floorplan_name;

          c.data.beacons.forEach(b=>{
            let s = "";

            if(b.type == "iBeacon"){
              s+= "UUID:  "+b.uuid+"- Major:  "+b.major+"- Minor:  "+b.minor+", Ref: "+b.ref;
            }
            else
            {
              s+= "Namespace ID:  "+b.nameSpaceId + "- Instance ID  "+b.instanceId+", Ref: "+b.ref;
            }
            this.beacons.push(s);

          });

        }

      });




    }

  }

  ngOnInit() {

  }




}





