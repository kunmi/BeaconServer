import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";
import {Project} from "../models/project";

@Injectable()
export class ProjectProvider{

  constructor(
    private http:HttpClient,
    private authService: AuthService) {}

  getProjects(){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Array<Project>>('http://localhost:3000/projects', {headers: headers})
      .map(res => res);
  }


  getproject(id){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any>('http://localhost:3000/projects/'+id, {headers: headers})
      .map(res => res);
  }

  registerProject(project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<RegisterResultData>('http://localhost:3000/projects/register', project, {headers: headers})
      .map(res => res);
  }

  updateproject(project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.patch<RegisterResultData>('http://localhost:3000/projects/'+project._id, project, {headers: headers})
      .map(res => res);
  }

  deleteProject(project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete<RegisterResultData>('http://localhost:3000/projects/'+project._id,  {headers: headers})
      .map(res => res);
  }



}

export interface RegisterResultData{
  success: boolean;
  msg?: string
}


