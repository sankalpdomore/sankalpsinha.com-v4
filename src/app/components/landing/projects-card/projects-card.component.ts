import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})

export class ProjectsCardComponent implements OnInit {

  @Input()
  data: Project

  constructor() { }
  ngOnInit(): void { }

}

interface Roles {
  description: string
}

interface Project {
  projectTitle: string;
  projectDescription: string
  projectImage: string,
  projectDate: string,
  projectWorkTitle: string,
  projectRoles: Roles,
  projectRandomFact: string,
  projectTeamSizePMs: string,
  projectTeamSizeDevs: string,
  projectTeamSizeQAs: string,
  projectTeamSizeDesigners: string
}
