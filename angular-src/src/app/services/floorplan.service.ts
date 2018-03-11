import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Values} from "../models/Values";

@Injectable()
export class FloorplanService {

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
    return this.http.get<any>(this.values.getServiceEndPoint()+'floorplan/'+floorplanId+'/upload',
      {
        headers: headers,
        params : {
          id: floorplanId,
          projectId: projectId
        }})
      .map(res => res);

  }

}
