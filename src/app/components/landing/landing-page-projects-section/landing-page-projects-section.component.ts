import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'component-landing-page-projects-section',
  templateUrl: './landing-page-projects-section.component.html',
  styleUrls: ['./landing-page-projects-section.component.css']
})

export class LandingPageProjectsSectionComponent {

  projectData: any = [];

  constructor(
    private httpClient: HttpClient
  ) {

  }
  ngOnInit() {
    this.httpClient.get("../assets/projects/projects.json").subscribe(data => {
      console.log(data);
      this.projectData = data;
    })
  }

}