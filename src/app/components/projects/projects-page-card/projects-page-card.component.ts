import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-projects-page-card',
  templateUrl: './projects-page-card.component.html',
  styleUrls: ['./projects-page-card.component.css']
})

export class ProjectsPageCardComponent implements OnInit {

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
  projectTypeFT: string,
  projectTypeSP: string,
  projectDate: string,
  projectWorkTitle: string,
  projectRoles: Roles,
  projectRandomFactEmoji: string,
  projectRandomFactText: string,
  projectTeamSizePMs: string,
  projectTeamSizeDevs: string,
  projectTeamSizeQAs: string,
  projectTeamSizeDesigners: string,
  projectUrlDisplay: string,
  projectUrlPending: string,
  projectUrl: string,
  projectUrlLabel: string,
}
