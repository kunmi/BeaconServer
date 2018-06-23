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
          
          <span>Destination: <div [innerHTML]="destination"></div></span>
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

  beacons =[];
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

        this.beacons = this.data.beacons;

        this.destination = '<br/>' +'Beacons with references: ';
        for(let i=0; i< this.beacons.length; i++)
        {
          let b = this.beacons[i];
          if(b.ref)
          {
            this.destination+= `<b> ${b.ref} </b>`;
            if(i<this.beacons.length-1)
            {
              this.destination+= ` , ` ;
            }
          }
        }

        if(this.data.area)
        {
          this.contentAreaId = this.data.area;
          if(this.data.area.name)
            this.destination+=  `<br/> Content-Area Name: <b> ${this.data.area.name} </b>`;

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


}





