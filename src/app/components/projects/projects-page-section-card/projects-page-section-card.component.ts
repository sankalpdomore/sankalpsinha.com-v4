import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-projects-page-section-card',
  templateUrl: './projects-page-section-card.component.html',
  styleUrls: ['./projects-page-section-card.component.css']
})

export class ProjectsPageSectionCardComponent implements OnInit {

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
