import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/operator/map';
import {AuthService} from "./auth.service";
import {Project} from "../models/project";
import {Values} from "../models/Values";

@Injectable()
export class ProjectProvider{

  constructor(
    private http:HttpClient,
    private authService: AuthService,
    private values : Values) {

  }

  getProjects(){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Array<Project>>(this.values.getServiceEndPoint()+'projects', {headers: headers})
      .map(res => res);
  }


  getProject(id){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.values.getServiceEndPoint()+'projects/'+id, {headers: headers})
      .map(res => res);
  }

  registerProject(project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<RegisterResultData>(this.values.getServiceEndPoint()+'projects/register', project, {headers: headers})
      .map(res => res);
  }

  updateproject(project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.patch<RegisterResultData>(this.values.getServiceEndPoint()+'projects/'+project._id, project, {headers: headers})
      .map(res => res);
  }

  deleteProject(project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete<RegisterResultData>(this.values.getServiceEndPoint()+'projects/'+project._id,  {headers: headers})
      .map(res => res);
  }


  addToProject(thisUser, project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<AddUserToProjectResultData>(this.values.getServiceEndPoint()+'projects/'+project._id+'/adduser', thisUser,{headers: headers})
      .map(res => res);
  }

  removeFromProjects(thisUser, project){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<AddUserToProjectResultData>(this.values.getServiceEndPoint()+'projects/'+project._id+'/removeuser', thisUser,{headers: headers})
      .map(res => res);
  }


  addImagesToProject(projectID, images)
  {
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<AddUserToProjectResultData>(this.values.getServiceEndPoint()+'projects/'+projectID+'/upload', images,{headers: headers})
      .map(res => res);
  }


  getImagesForProject(projectId)
  {
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.values.getServiceEndPoint()+'projects/'+projectId+'/images', {headers: headers})
    .map(res => res);
  }

  //FRONT END
  getProjectsForUser(userId){
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get<Array<Project>>(this.values.getServiceEndPoint()+'projects/foruser/'+userId, {headers: headers})
      .map(res => res);
  }


}

export interface RegisterResultData{
  success: boolean;
  msg?: string
}

export interface AddUserToProjectResultData{
  success: boolean;
  msg?: string;
  users?: any[];
}


