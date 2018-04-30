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

      <form  id="form" >

        <div>

          <h4>Post Message</h4>

          <mat-form-field class="input-full-width">
            <input matInput placeholder="title" [(ngModel)]="title"  name="title"  id="title" required="required" >
          </mat-form-field>

          <mat-form-field class="input-full-width">
            <textarea matInput placeholder="Message Here" [(ngModel)]="body"  name="body"  id="body" required="required"></textarea>
          </mat-form-field>
          
          <span>Destination: {{destination}}</span>
          <br/>
          <br/>
          
          <button mat-raised-button color="primary" (click)="publish()" >Publish</button>
          
        </div>

      </form>
      
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

  beaconId = null;
  contentAreaId = null;


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

      if(this.data.beacon)
      {
        this.beaconId = this.data.beacon;
         if(this.data.beacon.ref)
           this.destination = "beacon with ref "+ this.data.beacon.ref;
      }
      else
      {
        this.contentAreaId = this.data.area;
        if(this.data.area.name)
          this.destination = this.data.area.name;
      }

    }

  }

  ngOnInit() {

  }


  publish(){

   let content: any = this.data.content = {
      title : this.title,
      body : this.body,
    };

    if(this.beaconId)
    {
      content.beacon = this.beaconId;
    }
    else if(this.contentAreaId)
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


}





