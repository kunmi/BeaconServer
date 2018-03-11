import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../../../services/auth.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {ValidateService} from "../../../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {YesNoDialogComponent, YesNoDialogData} from "../../../util.component";
import {FormControl, Validators} from "@angular/forms";
import {Project} from "../../../../models/project";
import {ProjectProvider} from "../../../../services/project.service";
import {User} from "../../../../models/User";
import {UserProvider} from "../../../../services/user.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'dash-project-dialog',
  template: `<main>
    <div class="container">

      <form (submit)="onRegisterSubmit()"  class="custom-form">


        <div  >

          <h4>Project Details</h4>

          <mat-form-field class="input-full-width">
            <input matInput placeholder="Name *" [(ngModel)]="model.name"  name="name"  id="name" [disabled]="disable_info" >
          </mat-form-field>

          <mat-form-field class="input-full-width">
            <input matInput placeholder="E-Mail*" [formControl]="emailFormControl" [(ngModel)]="model.email" name="email" id="email" [disabled]="disable_info">
            <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
              Please enter a valid email address
            </mat-error>
            <mat-error *ngIf="emailFormControl.hasError('required')">
              Email is <strong>required</strong>
            </mat-error>
          </mat-form-field>
          
          <mat-form-field class="input-full-width">
            <textarea matInput placeholder="Description" [(ngModel)]="model.description"  name="description" id="description"  [disabled]="disable_info" rows="7"></textarea>
          </mat-form-field>

        </div>

        <br/>

        <br/>

        <div class="row">

          <div class="col-4">
            <input *ngIf="!inputs_disabled" type="submit" class="btn btn-primary" value="{{submitText}}" >
          </div>
          
          <div class="col" *ngIf="data">
            <div style="float: right" *ngIf="can_delete">
              <button  mat-raised-button color="warn" [disabled]="!can_delete" type="button" class="btn btn-primary" (click)="openDeleteDialog()">Delete</button>
            </div>
          </div>

        </div>


      </form>

      <br/>
      <br/>
      <button *ngIf="data" mat-button color="primary" (click)="gotoProjectHome()">Go to {{model.name}}'s home</button>
    </div>

  </main>`
})

export class DashProjectDialogComponents implements OnInit{

  model : Project;

  disable_info = false;
  can_delete = true;


  users : User[];

  submitText = "Create Project";

  /** Needed for Google Email Validator **/
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private projectProvider: ProjectProvider,
    private userProvider: UserProvider,
    private authService: AuthService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<DashProjectDialogComponents>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.model = this.initProject();
    this.authService.getProfile().subscribe(result=>{

      if(!result.user.roles.manage_projects)
      {
        this.emailFormControl.disable();
      }

      this.disable_info = !result.user.roles.manage_projects;
      this.can_delete =
        result.user.roles.manage_users&&
        result.user.roles.manage_roles&&
        result.user.roles.manage_projects&&
        result.user.isadmin;
    });

    userProvider.getUsers().subscribe(result=>{
      this.users  = result;
    });

    if (this.data)
    {
      this.projectProvider.getproject(this.data.id).subscribe(data => {
        if(!data.success)
        {
          this.dialogRef.close({success: false, message : data.message});
        }
        else {
          this.model = data.project;
          this.submitText = "Update Project";
        }
      });
    }


//    this.model.name = "Hello Boys";

  }
  ngOnInit() {
  }

  onRegisterSubmit(){

    //Required Fields
    if(!this.validateService.validateProjectRegistration(this.model))
    {
      this.flashMessagesService.show('Please fill in all fields',
        {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }


    //Validate Email
    if(!this.validateService.validateEmail(this.model.email))
    {
      this.flashMessagesService.show('Please use a valid email',
        {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Submission

    if(this.data) {
      //Update User
      this.projectProvider.updateproject(this.model).subscribe(data=>{

        if(data.success)
        {
          this.model = this.initProject();
          this.dialogRef.close({success: true});
        }
        else
        {
          this.flashMessagesService.show('Error performing update '+data.msg,
            {cssClass: 'alert-danger', timeout: 3000});
        }

      });


    }
    else
    {
      //Register User
      this.projectProvider.registerProject(this.model).subscribe(data => {

        if (data.success) {
          //this.flashMessagesService.show('Registration successful',
          //{cssClass: 'alert-success', timeout: 3000});

          this.model = this.initProject();
          this.dialogRef.close({success: true});
          //this.router.navigate(['/login'])

        }
        else {
          this.flashMessagesService.show('Error Registering User '+data.msg,
            {cssClass: 'alert-danger', timeout: 3000});
        }

      });
    }

  }

  deleteDialogData : YesNoDialogData = {
    data: {},
    message: "Are you sure you wan to delete this project?",
    title: "Delete Project",
    yes: "Yes",
    no: "No"
  };
  openDeleteDialog(): void{

    let dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '350px',
      data: this.deleteDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        if(result.agree)
        {
          this.projectProvider.deleteProject(this.model).subscribe(data=>{
            if(data.success)
            {
              this.model = this.initProject();
              this.dialogRef.close({success: true});
            }
            else{
              this.flashMessagesService.show('Error deleting User '+data.msg,
                {cssClass: 'alert-danger', timeout: 3000});
            }
          });

        }
        else
        {
        }
      }
    });

  }

  gotoProjectHome(){
    this.dialogRef.close({navigate: true, id: this.model._id});
    //this.router.navigate(["./project", this.model._id],{relativeTo: this.r});
}




  initProject(){

    const newProject:Project = {
      name : "",
      email: "",
      description: ""
    };

    return newProject;
  }






}



