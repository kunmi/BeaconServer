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
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res);
  }
  authenticateUser(user){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
      .map(res => res);
  }

  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers = headers.append('Authorization', this.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
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
