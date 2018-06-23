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
import {InfoDialogComponent, InfoDialogData} from "../../../util.component";

@Component({
  selector: 'dialog-beacon-add',
  template: `<main>
    <div class="container">

      <form  id="form" >

        <div  >

          <h4>Beacon Details</h4>
          
          <br/>
          <section class="example-section">
            <label class="example-margin">Type:</label>
            <mat-radio-group [(ngModel)]="model.type" name="kind" [disabled]="canDelete()">
              <mat-radio-button  value="iBeacon">iBeacon</mat-radio-button>
              <mat-radio-button  value="eddystone">Eddystone</mat-radio-button>
            </mat-radio-group>
          </section>
          
          <br/>
          
          <section>

            <div *ngIf="model.type == 'iBeacon'">
            <mat-form-field class="input-full-width">
              <input matInput placeholder="UUID" [(ngModel)]="model.uuid"  name="uuid"  id="uuid" [disabled]="disable_info" >
            </mat-form-field>
            <mat-form-field class="input-full-width">
              <input matInput placeholder="Major" [(ngModel)]="model.major"  name="major"  id="major" [disabled]="disable_info" >
            </mat-form-field>
            <mat-form-field class="input-full-width">
              <input matInput placeholder="Minor" [(ngModel)]="model.minor"  name="minor"  id="minor" [disabled]="disable_info" >
            </mat-form-field>
            <mat-form-field class="input-full-width">
              <input matInput placeholder="Map to Number: " [(ngModel)]="model.ref"  name="ref"  id="ref" [disabled]="disable_info" >
            </mat-form-field>

            </div>

            
            <div *ngIf="model.type == 'eddystone'">
              <mat-form-field class="input-full-width">
                <input matInput placeholder="Namespace ID" [(ngModel)]="model.nameSpaceId"  name="nameSpaceId"  id="nameSpaceId" [disabled]="disable_info" required="required" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Instance ID" [(ngModel)]="model.instanceId"  name="instanceId"  id="instanceId" [disabled]="disable_info" >
              </mat-form-field>
              <mat-form-field class="input-full-width">
                <input matInput placeholder="Map to Number: " [(ngModel)]="model.ref"  name="ref"  id="ref" [disabled]="disable_info" >
              </mat-form-field>

            </div>
            
          </section>
         
          <br/>
          

          <button mat-raised-button color="primary" (click)="addBeacon()" >{{submitText}}</button>
          <button mat-raised-button color="warn" (click)="deleteBeacon()" *ngIf="data" >Delete Beacon</button>
          
            
          </div>
          

      </form>
      
    </div>

  </main>`
})

export class BeaconDialogComponent implements OnInit {

  form: FormGroup;
  model:any = {
    uuid: "",
    major: "",
    minor: "",
    ref: "",
    txPower: "",
    type : "iBeacon",
    nameSpaceId: "",
    instanceId: ""
  };


  align = 'start';

  disable_info = false;

  submitText = "Add Beacon";





  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService,
              private userProvider: UserProvider,
              private authService: AuthService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<BeaconDialogComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {



    this.authService.getProfile().subscribe(result => {
      this.disable_info = !result.user.roles.manage_projects;
    });

    if (this.data) {

      this.submitText = "Save";

      let beacon = this.data.beacon;

      this.model.txPower = beacon.txPower;
      this.model.ref = beacon.ref;
      this.model.type = beacon.type;

      if(beacon.type == "iBeacon")
      {
        this.model.uuid = beacon.uuid;
        this.model.major = beacon.major;
        this.model.minor = beacon.minor;
      }
      else
      {
        this.model.nameSpaceId = beacon.nameSpaceId;
        this.model.instanceId = beacon.instanceId;
      }

    }

  }

  ngOnInit() {

  }

  canDelete(){
    if(this.data && !this.disable_info)
      return true;
    else
      return false;
  }

  addBeacon(){

    if(this.model.type === "iBeacon")
    {
      if((this.model.uuid + "").trim().length <= 0) {
        this.showBeaconError("UUID ");
        return;
      }
    }
    else
    {
      if((this.model.nameSpaceId + "").trim().length <= 0) {
        this.showBeaconError("Namespace ");
        return;
      }
    }

        if(this.data)
        {

          this.data.beacon.type = this.model.type;
          this.data.beacon.ref = this.model.ref;

          if(this.model.type == "iBeacon")
          {
            this.data.beacon.uuid = this.model.uuid;
            this.data.beacon.major = this.model.major;
            this.data.beacon.minor = this.model.minor;
          }
          else
          {
            this.data.beacon.nameSpaceId = this.model.nameSpaceId;
            this.data.beacon.instanceId = this.model.instanceId;
          }

          this.dialogRef.close({data: this.data.beacon, action: "edit", index : this.data.index});

        }
        else
        {
          this.dialogRef.close({data: this.model, action: "add"});
        }



  }

  deleteBeacon(){
    this.dialogRef.close({data: this.data.beacon, action: "delete", index : this.data.index});
  }


  showBeaconError(item) {
    let infoDialogData: InfoDialogData = {
      message: item + "is required, please provide",
      title: "Required field",
      yes: "okay"
    };


    this.dialog.open(InfoDialogComponent, {
      width: '450px',
      data: infoDialogData
    });
  }

}





