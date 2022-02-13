import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'component-landing-projects',
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.css']
})

export class LandingProjectsComponent implements OnInit {
  projectData: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("assets/projects/projects.json").subscribe(data => {
      console.log(data);
      this.projectData = data;
    })
  }
}