
import {Injectable} from "@angular/core";

const title: string = "Beacon Framework";
const year: string = "2017";
const copyright: string = "Olakunmi Joseph";

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
}
