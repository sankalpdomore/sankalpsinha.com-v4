import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'component-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})

export class ProjectsPageComponent implements OnInit {
  projectData: any = [];

  constructor(
    private httpClient: HttpClient,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Projects');
    this.meta.addTag({ name: 'description', content: 'Over my 10 years of designing, I have been lucky enough to work with some amazing people & teams. Below is a selected list of projects that I’ve helped companies design & build over the years. Some are a success, some are a failure - but all learning in disguise ✨' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit() {
    this.httpClient.get("../assets/projects/projects.json").subscribe(data => {
      console.log(data);
      this.projectData = data;
    })
  }
}