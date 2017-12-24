import {Component, Inject, OnInit} from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';
import {User} from "../../../models/User";
import {ValidateService} from "../../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {Observable} from "rxjs/Observable";
import {YesNoDialogComponent, YesNoDialogData} from "../../util.component";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model : User;

  disable_roles = false;
  disable_info = false;
  disable_isadmin = true;
  can_delete = true;


  submitText = "Register";

  /** Needed for Google Email Validator **/
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.model = this.initUser();
    this.authService.getProfile().subscribe(result=>{

      if(!result.user.roles.manage_users)
      {
        this.emailFormControl.disable();
      }

      this.disable_roles = !result.user.roles.manage_roles;
      this.disable_info = !result.user.roles.manage_users;
      this.disable_isadmin = !result.user.isadmin;

      this.can_delete =
        result.user.roles.manage_users&&
        result.user.roles.manage_roles&&
        result.user.roles.manage_projects&&
        result.user.isadmin;

    });

    if (this.data)
    {
      this.authService.getUser(this.data.id).subscribe(data => {
        if(!data.success)
        {
          this.dialogRef.close({success: false, message : data.message});
        }
        else {
          this.model = data.user;
          this.submitText = "Update";
        }
      });
    }


//    this.model.name = "Hello Boys";

  }
  ngOnInit() {
  }

  onRegisterSubmit(){

    //Required Fields
    if(!this.validateService.validateRegister(this.model))
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
      this.authService.updateUser(this.model).subscribe(data=>{

        if(data.success)
        {
          this.model = this.initUser();
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

      this.authService.registerUser(this.model).subscribe(data => {

        if (data.success) {
          //this.flashMessagesService.show('Registration successful',
          //{cssClass: 'alert-success', timeout: 3000});

          this.model = this.initUser();
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
     message: "Are you sure you wan to delete this user?",
    title: "Delete User",
    yes: "Yes",
    no: "No"
  };
  openDeleteDialog(): void{

    let dialogRef = this.dialog.open(YesNoDialogComponent, {
      width: '250px',
      data: this.deleteDialogData
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        if(result.agree)
        {
          this.authService.deleteUser(this.model).subscribe(data=>{
              if(data.success)
              {
                this.model = this.initUser();
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



  initUser(){

    const newuser:User = {
      name : "",
      username:"",
      email: "",
      roles: {
        manage_users : false,
        manage_roles : false,
        manage_projects: false
      },
      isadmin: false
    };

    return newuser;
  }






}
