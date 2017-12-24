import { Injectable } from '@angular/core';
//import {Http, Headers} from "@angular/http";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()

export class AuthService {

  authToken: any;
  user: User;

  constructor(private http:HttpClient) {}

  registerUser(user){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<RegisterResultData>('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res);
  }

  updateUser(user){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.patch<RegisterResultData>('http://localhost:3000/users/'+user._id, user, {headers: headers})
      .map(res => res);
  }

  deleteUser(user){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete<RegisterResultData>('http://localhost:3000/users/'+user._id,  {headers: headers})
      .map(res => res);
  }

  authenticateUser(user){
    let headers = new HttpHeaders();
    //this.loadToken();
    //headers = headers.append('authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post<AuthenticateResultData>('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(
        res => res);
  }

  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<ProfileResultData>('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res);
  }

  getUser(id){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any>('http://localhost:3000/users/'+id, {headers: headers})
      .map(res => res);
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

export interface ProfileResultData {
  user: any;
}

export interface AuthenticateResultData{

  success: boolean,
  token? : string,
  user?: Object,
  msg? : string
}

export interface RegisterResultData{
  success: boolean;
  msg?: string
}

