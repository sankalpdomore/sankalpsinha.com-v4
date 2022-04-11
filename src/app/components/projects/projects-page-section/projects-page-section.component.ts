import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'component-projects-page-section',
  templateUrl: './projects-page-section.component.html',
  styleUrls: ['./projects-page-section.component.css']
})

export class ProjectsPageSectionComponent implements OnInit {
  projectData: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("../assets/projects/projects.json").subscribe(data => {
      console.log(data);
      this.projectData = data;
    })
  }
}