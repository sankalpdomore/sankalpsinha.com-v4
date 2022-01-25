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
  ProjectRoles1: String

  @Input()
  ProjectRoles2: String

  @Input()
  ProjectRoles3: String

  @Input()
  ProjectRoles4: String

  @Input()
  ProjectRandomFact: String

  @Input()
  ProjectTeamSize: String

  @Input()
  ProjectURL: String

  constructor() { }
  ngOnInit(): void { }

  // formPhotoUrl(photoName, dateTaken) {
  //   console.log(photoName, dateTaken)
  //   var photoName = photoName.replace(/\s+/g, '-').toLowerCase()
  //   var dateTaken = dateTaken.replace(',', '')
  //   dateTaken = dateTaken.replace(/\s+/g, '-').toLowerCase()
  //   var url = '/photos/' + photoName + '-' + dateTaken
  //   return url
  // }

}
