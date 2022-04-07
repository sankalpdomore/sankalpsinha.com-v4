import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'component-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})

export class ProjectsPageComponent implements OnInit {
  projectData: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("../assets/projects/projects.json").subscribe(data => {
      console.log(data);
      this.projectData = data;
    })
  }
}