import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-projects-card',
  templateUrl: './landing-projects-card.component.html',
  styleUrls: ['./landing-projects-card.component.css']
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
