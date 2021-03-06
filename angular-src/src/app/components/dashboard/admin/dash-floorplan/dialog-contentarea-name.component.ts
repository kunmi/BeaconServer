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

@Component({
  selector: 'dialog-contentarea-name',
  template: `<main>
    <div class="container">

      <form  id="form" >

        <div>

          <h4> Content Area Name</h4>

          <mat-form-field class="input-full-width">
            <input matInput placeholder="Name" [(ngModel)]="name"  name="name"  id="name" [disabled]="disable_info" required="required" >
          </mat-form-field>
          
          <button mat-raised-button color="primary" (click)="save()" >Save</button>
          
        </div>

      </form>
      
    </div>

  </main>`
})

export class DialogContentAreaNameComponent implements OnInit {

  form: FormGroup;
  name:String = "";

  disable_info = false;


  constructor(private validateService: ValidateService,
              private flashMessagesService: FlashMessagesService,
              private userProvider: UserProvider,
              private floorplanProvider: FloorplanProvider,
              private authService: AuthService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<DialogContentAreaNameComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any) {

    this.form = this.fb.group({
      'name': new FormControl('', [Validators.required])
    });


    this.authService.getProfile().subscribe(result => {
      this.disable_info = !result.user.roles.manage_projects;
    });

    if (this.data) {
      this.name = this.data.area.name
    }

  }

  ngOnInit() {

  }


  save(){
    this.data.area.name = this.name;
      this.dialogRef.close({data: this.data, index: this.data.index})
  }


}





