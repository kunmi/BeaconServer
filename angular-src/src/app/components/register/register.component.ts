import { Component, OnInit } from '@angular/core';
import {FormControl,  Validators} from '@angular/forms';
import {User} from "../../models/User";
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = new User();

  /** Needed for Google Email Validator **/
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
    ) {
    this.model.name = "Hello Boys";

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

    //Register User

    this.authService.registerUser(this.model).subscribe(data => {

      if(data.success)
      {
        this.flashMessagesService.show('Registration successful',
          {cssClass: 'alert-success', timeout: 3000});

        this.router.navigate(['/login'])


      }
      else {
        this.flashMessagesService.show('Registration successful',
          {cssClass: 'alert-danger', timeout: 3000});

        this.router.navigate(['/register'])

      }

    });

  }




}
