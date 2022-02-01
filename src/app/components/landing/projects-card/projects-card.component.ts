import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

interface Roles {
  name: string
}

interface Project {
  title: string;
  description: string
  image: string,
  date: string,
  workTitle: string,
  roles: Roles,
  randomFact: string,
  teamSizePMs: string,
  teamSizeDevs: string,
  teamSizeQAs: string,
  teamSizeDesigners: string
}

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
