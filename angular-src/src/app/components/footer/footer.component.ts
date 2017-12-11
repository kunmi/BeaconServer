import { Component, OnInit } from '@angular/core';
import {Values} from "../../models/Values";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title: string;
  copyright: string;
  year: string;

  constructor(
    private info: Values
  ) {}

  ngOnInit() {
    this.title = this.info.getTitle();
    this.copyright = this.info.getCopyright();
    this.year = this.info.getYear();

  }

}
