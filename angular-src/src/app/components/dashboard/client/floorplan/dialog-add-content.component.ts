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
  selector: 'dialog-add-content',
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
                  <input matInput placeholder="title" [(ngModel)]="title"  name="title"  id="title" required="required" >
                </mat-form-field>

                <mat-form-field class="input-full-width">
                  <textarea matInput placeholder="Message Here" [(ngModel)]="body"  name="body"  id="body" required="required"></textarea>
                </mat-form-field>

                <span>Destination: <div [innerHTML]="destination"></div></span>
                <br/>
                <br/>

                <button mat-raised-button color="primary" (click)="publish()" >Publish</button>

              </div>

            </form>

          </mat-tab>

          <mat-tab label="Details">


            <div *ngIf="isBeaconArea()">
              <br/>
              <br/>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Beacon Type:" [(ngModel)]="beacons[0].type"  name="type"  id="type" [disabled]="true" >
              </mat-form-field>


              <div *ngIf="beacons[0].type == 'iBeacon'">
                <mat-form-field class="input-full-width">
                  <input matInput placeholder="UUID" [(ngModel)]="beacons[0].uuid"  name="uuid"  id="uuid" [disabled]="true" >
                </mat-form-field>
                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Major" [(ngModel)]="beacons[0].major"  name="major"  id="major" [disabled]="true" >
                </mat-form-field>
                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Minor" [(ngModel)]="beacons[0].minor"  name="minor"  id="minor" [disabled]="true" >
                </mat-form-field>
                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Map to Number: " [(ngModel)]="beacons[0].ref"  name="ref"  id="ref" [disabled]="true" >
                </mat-form-field>

              </div>


              <div *ngIf="beacons[0].type == 'eddystone'">
                
                
                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Namespace ID" [(ngModel)]="beacons[0].nameSpaceId"  name="nameSpaceId"  id="nameSpaceId" [disabled]="true" required="required" >
                </mat-form-field>

                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Instance ID" [(ngModel)]="beacons[0].instanceId"  name="instanceId"  id="instanceId" [disabled]="true" >
                </mat-form-field>
                <mat-form-field class="input-full-width">
                  <input matInput placeholder="Map to Number: " [(ngModel)]="beacons[0].ref"  name="ref"  id="ref" [disabled]="true" >
                </mat-form-field>

              </div>

            </div>
          
            <br/>
            <br/>
            
            
            
            
            <div *ngIf="isContentArea()">

              <br/>
              <br/>
              
              <mat-form-field class="input-full-width">
                <input matInput placeholder="Type" value="Content Area"  name="instanceId"  id="instanceId" [disabled]="true" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Type" value="Name of Area: "  [(ngModel)]="contentAreaName"  name="instanceId"  id="instanceId" [disabled]="true" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Number of Beacons " [(ngModel)]="beacons.length"  name="ref"  id="ref" [disabled]="true" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Beacon Refs: " [(ngModel)]="containedBeacons"  name="ref"  id="ref" [disabled]="true" >
              </mat-form-field>
              


              <br/>
              <br/>
              
            </div>
          
          </mat-tab>
          

          <mat-tab label="Telemetry" *ngIf="isBeaconArea()">
            <br/>
            <br/>

            <div>
              <mat-form-field class="input-full-width">
                <input matInput placeholder="Last Seen: " value="{{getAsFormattedDate(beacons[0].lastSeen)}}"  name="last_seen"  id="last_seen" [disabled]="true" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Created On: " value="{{getAsFormattedDate(beacons[0].created)}}"  name="created"  id="created" [disabled]="true" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <textarea matInput placeholder="Telemetry" [(ngModel)]="beacons[0].telemetry"  name="body"  id="body" required="required"></textarea>
              </mat-form-field>
              
              
              

            </div>

            <br/>
            <br/>
          
          </mat-tab>
        </mat-tab-group>
        
      </div>

      
    </div>

  </main>`
})

export class DialogAddContentComponent implements OnInit {

  form: FormGroup;
  title: "";
  body: "";

  destination = "";

  floorplanId = "";
  projectId = "";

  beacons =[];

  contentAreaId = null;
  contentAreaName = "Not named - To name please save from admin";
  containedBeacons = "";


  disable_info = false;


  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService,
              private userProvider: UserProvider,
              private floorplanProvider: FloorplanProvider,
              private contentProvider: ContentProvider,
              private authService: AuthService,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogAddContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.fb.group({
      'title': new FormControl('', [Validators.required])
    });


    if (this.data) {

      this.projectId = this.data.projectId;
      this.floorplanId = this.data.floorplanId;

        this.beacons = this.data.beacons;

        this.destination = '<br/>' +'Beacons with references: ';
        for(let i=0; i< this.beacons.length; i++)
        {
          let b = this.beacons[i];
          if(b.ref)
          {
            this.destination+= `<b> ${b.ref} </b>`;
            this.containedBeacons = `<b> ${b.ref} </b>`;
            if(i<this.beacons.length-1)
            {
              this.destination+= ` , ` ;
              this.containedBeacons = ` , ` ;
            }
          }
        }

        if(this.data.area)
        {
          this.contentAreaId = this.data.area;
          if(this.data.area.name)
          {
            this.destination+=  `<br/> Content-Area Name: <b> ${this.data.area.name} </b>`;
            this.contentAreaName = this.data.area.name;
          }

        }


    }

  }

  ngOnInit() {

  }


  publish(){

   let content: any = this.data.content = {
      title : this.title,
      body : this.body,
      beacons : []
    };

   for(let i=0; i<this.beacons.length; i++)
   {
     content.beacons.push(this.beacons[i]._id);
   }

    if(this.contentAreaId)
    {
      content.area = this.contentAreaId;
    }

    this.contentProvider.publishContentIntoProjectAndFloorplan(this.projectId, this.floorplanId, content).subscribe(result=>{

      if(result.success){
        this.dialogRef.close({success : true});
      }
      else{
        this.flashMessagesService.show("An error occurred "+result.msg);
      }
    });




    //this.dialogRef.close({data: result});


  }


  isContentArea():boolean
  {
    return this.contentAreaId != null;
  }

  isBeaconArea():boolean{
    return this.contentAreaId == null;
  }

  getAsFormattedDate(value){
    return (new Date(value)).toUTCString();
  }


}





