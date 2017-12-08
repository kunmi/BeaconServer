import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {User} from "../models/User";
import {AuthService} from "./auth.service";



@Injectable()
export class UserProvider{

  authToken: any;
  user: User;

  constructor(
    private http:Http,
    private authService: AuthService) {}

  getUsers(){
    let headers = new Headers();
    this.authService.loadToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users', {headers: headers})
      .map(res => res.json());
  }

}

