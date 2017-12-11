import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {AuthService} from "./auth.service";



@Injectable()
export class UserProvider{

  authToken: any;
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

}

