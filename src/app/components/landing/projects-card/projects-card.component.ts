import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit {

  @Input()
  ProjectTitle: String

  @Input()
  ProjectDescription: String

  @Input()
  ProjectImage: String

  @Input()
  ProjectDate: String

  @Input()
  ProjectWorkTitle: String

  @Input()
  ProjectRoles: []

  @Input()
  ProjectRandomFact: String

  @Input()
  ProjectTeamSizePMs: String

  @Input()
  ProjectTeamSizeQAs: String

  @Input()
  ProjectTeamSizeDevs: String

  @Input()
  ProjectTeamSizeDesigners: String

  @Input()
  ProjectURL: String

  constructor() { }
  ngOnInit(): void { }

}
