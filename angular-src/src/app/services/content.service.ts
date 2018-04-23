import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Values} from "../models/Values";
import {RegisterResultData} from "./project.service";

@Injectable()
export class FloorplanProvider {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private values: Values
  ) {}

  publishContentIntoProjectAndFloorplan(projectId, floorplanId, content)
  {
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.values.getServiceEndPoint()+'content/floorplan/'+floorplanId+'/project/'+projectId,{content: content},{headers: headers})
      .map(res => res);
  }






}
