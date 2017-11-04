import { Injectable } from '@angular/core';
import {User} from "../models/User";

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {

    if(user.name == undefined || user.name.length == 0)
    {
      return false;
    }
    if(user.username == undefined || user.username.length == 0)
    {
      return false;
    }
    if(user.email == undefined || user.email.length == 0)
    {
      return false;
    }
    if(user.password == undefined || user.password.length == 0)
    {
      return false;
    }

    return true;
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


}
