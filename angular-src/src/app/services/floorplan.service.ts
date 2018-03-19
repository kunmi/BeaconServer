import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Values} from "../models/Values";

@Injectable()
export class FloorplanProvider {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private values: Values
  ) {}


  getFloorPlan(floorplanId, projectId)
  {
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.values.getServiceEndPoint()+'floorplan/'+floorplanId+'/project/'+projectId,
      {headers: headers}).map(res => res);
  }

  deleteFloorplanWithId(id, projectId)
  {
    let headers = new HttpHeaders();
    this.authService.loadToken();
    headers = headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.delete<any>(this.values.getServiceEndPoint()+'floorplan/'+id+'/project/'+projectId,
      {headers: headers}).map(res => res);
  }

}
