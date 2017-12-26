import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {AuthService} from "./auth.service";



@Injectable()
export class UserProvider{
  user: User;

  constructor(
    private http:HttpClient,
    private authService: AuthService) {}

  getUsers(){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Array<User>>('http://localhost:3000/users', {headers: headers})
      .map(res => res);
  }



  getUser(id){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any>('http://localhost:3000/users/'+id, {headers: headers})
      .map(res => res);
  }

  registerUser(user){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<RegisterResultData>('http://localhost:3000/users/register', user, {headers: headers})
      .map(res => res);
  }

  updateUser(user){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.patch<RegisterResultData>('http://localhost:3000/users/'+user._id, user, {headers: headers})
      .map(res => res);
  }

  deleteUser(user){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete<RegisterResultData>('http://localhost:3000/users/'+user._id,  {headers: headers})
      .map(res => res);
  }



}



export interface RegisterResultData{
  success: boolean;
  msg?: string
}


