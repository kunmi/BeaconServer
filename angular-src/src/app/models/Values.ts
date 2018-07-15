
import {Injectable} from "@angular/core";

const title: string = "Beacon Framework";
const year: string = "2017";
const copyright: string = "Olakunmi Joseph";

//const BASE_URL =  "http://localhost:3000/";
//Heroku
const BASE_URL =  "";

export class Values {
  getTitle(){
    return title;
  }

  getYear(){
    return year
  }

  getCopyright(){
    return copyright;
  }

  getServiceEndPoint(){
    return BASE_URL;
  }

}
