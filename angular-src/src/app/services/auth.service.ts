import { Injectable } from '@angular/core';
//import {Http, Headers} from "@angular/http";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {tokenNotExpired} from 'angular2-jwt';
import {Values} from "../models/Values";

@Injectable()

export class AuthService {

  authToken: any;
  user: User;

  constructor(private http:HttpClient,
              private values: Values) {}

  authenticateUser(user){
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<AuthenticateResultData>(this.values.getServiceEndPoint()+'users/authenticate', user, {headers: headers})
      .map(
        res => res);
  }



  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }


  loggedInandSpecial()
  {
    return tokenNotExpired('id_token');
  }

  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.values.getServiceEndPoint()+'users/profile', {headers: headers})
      .map(res => res);
  }


  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;

  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();

  }

}


export interface AuthenticateResultData{

  success: boolean,
  token? : string,
  user?: Object,
  msg? : string
}

export interface ProfileResultData {
  user: any;

}

