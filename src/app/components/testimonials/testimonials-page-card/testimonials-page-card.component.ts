import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-testimonials-page-card',
  templateUrl: './testimonials-page-card.component.html',
  styleUrls: ['./testimonials-page-card.component.css']
})

export class TestimonialsPageCardComponent implements OnInit {

  @Input()
  data: Project

  constructor() { }
  ngOnInit(): void { }

}

interface Roles {
  description: string
}

interface Project {
  testimonialTitle: string;
  testimonialContent: string
  testimonialAuthorImage: string,
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
