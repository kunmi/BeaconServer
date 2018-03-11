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
  selector: 'dialog-image-upload',
  template: `<main>
    <div class="container">

      <form [formGroup] = "form" (ngSubmit)="uploadImages()" id="form" enctype="multipart/form-data">

        <div  >

          <h4>Upload Floorplan</h4>
          <br/>

          <mat-progress-bar mode="indeterminate" *ngIf="uploading"></mat-progress-bar>

          <div *ngIf="!uploading">

            <input  id="imageInput" name="imageInput" type="file" multiple (change)="onChange($event)" formControlName="imageInput"
                    accept=".jpg, .gif, .png"
                    required/>
            <br/>
            <br/>

            <div *ngFor="let image of images; let i = index" >

              <span>{{image.name}}</span>

            </div>

            <br/>

            <div class="row">

              <div class="col-4">
                <input *ngIf="!inputs_disabled"  type="submit" class="btn btn-primary" [disabled]="!(images.length>0)" value="Upload Image" />
              </div>
              
            </div>
            
          </div>
            
            
          </div>
          
        

        

      </form>
      
    </div>

  </main>`
})

export class ProjectImageDialogComponent implements OnInit{

  form : FormGroup;

  model : Project;

  disable_info = false;
  submitText = "Upload Image";

  images = [];
  files: FileList;

  upload = [];
  uploading = false;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private projectProvider: ProjectProvider,
    private userProvider: UserProvider,
    private authService: AuthService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ProjectImageDialogComponent>,
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.form = this.fb.group({
      'imageInput' : new FormControl('',[Validators.required])
    });

    this.model = this.initProject();
    this.authService.getProfile().subscribe(result=>{
      this.disable_info = !result.user.roles.manage_projects;
    });

    if (this.data)
    {
      this.projectProvider.getProject(this.data.id).subscribe(data => {
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


  }
  ngOnInit() {

  }



  uploadImages(){

    this.uploading = true;

    let data = new FormData();

    if(this.files.length == 0)
      return;

    for(let i=0; i< this.files.length; i++)
    {
      data.append("imageInput", this.files[i]);
    }

    this.projectProvider.addImagesToProject(this.data.id, data).subscribe(result => {

      this.uploading = false;
      if(result.success)
      {
        this.dialogRef.close({success: true});
      }
      else
      {
        this.flashMessagesService.show('Error occurred '+result.msg,
          {cssClass: 'alert-danger', timeout: 3000});
        return false;
      }



    });
   //   let data = new FormData();
  //  data.append("projectID", this.data.id);

  }


  onChange(event: any) {
    this.images = [].slice.call(event.target.files);
    this.files = event.target.files;


    //input.value = files.map(f => f.name).join(', ');
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



