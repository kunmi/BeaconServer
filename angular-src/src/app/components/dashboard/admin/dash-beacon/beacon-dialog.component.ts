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
            <mat-radio-group [(ngModel)]="model.type" name="kind">
              <mat-radio-button  value="ibeacon">iBeacon</mat-radio-button>
              <mat-radio-button  value="eddystone">Eddystone</mat-radio-button>
            </mat-radio-group>
          </section>
          
          <br/>
          
          <section>

            <div *ngIf="model.type == 'ibeacon'">
            <mat-form-field class="input-full-width">
              <input matInput placeholder="UUID" [(ngModel)]="model.uuid"  name="uuid"  id="uuid" [disabled]="disable_info" required="required" >
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
                <input matInput placeholder="Namespace ID" [(ngModel)]="model.uuid"  name="uuid"  id="uuid" [disabled]="disable_info" required="required" >
              </mat-form-field>

              <mat-form-field class="input-full-width">
                <input matInput placeholder="Instance ID" [(ngModel)]="model.minor"  name="minor"  id="minor" [disabled]="disable_info" >
              </mat-form-field>
              <mat-form-field class="input-full-width">
                <input matInput placeholder="Map to Number: " [(ngModel)]="model.ref"  name="ref"  id="ref" [disabled]="disable_info" >
              </mat-form-field>

            </div>
            
          </section>
         
          <br/>
          

          <button mat-raised-button color="primary" (click)="addBeacon()" >Add Beacon</button>
          
            
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
    txpower: "",
    type : "ibeacon"
  };


  align = 'start';

  disable_info = false;
  submitText = "Upload Image";

  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService,
              private userProvider: UserProvider,
              private authService: AuthService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<BeaconDialogComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.fb.group({
      'uuid': new FormControl('', [Validators.required])
    });


    this.authService.getProfile().subscribe(result => {
      this.disable_info = !result.user.roles.manage_projects;
    });

    if (this.data) {

    }


  }

  ngOnInit() {

  }


  addBeacon(){

      if((this.model.uuid + "").trim().length > 0)
      {
        this.dialogRef.close({data: this.model});
      }

  }


}





