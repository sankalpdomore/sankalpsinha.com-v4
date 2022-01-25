import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-landing-projects',
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.css']
})
export class LandingProjectsComponent implements OnInit {

  data: any =

    [
      {
        "ProjectTitle": "SellerCrowd",
        "ProjectDescription": "Designing a social platform to help salespeople exchange insights anonymously & hit sales goals faster.",
        "ProjectImage": "../assets/projects/project-tiles/sellercrowd.png",
        "ProjectDate": "Jan ’18 - Oct ‘21",
        "ProjectWorkTitle": "Senior Product Designer",
        "ProjectRoles1": "I was hired by SellerCrowd during a time when the code + design wasn’t scalable. The company was looking to redesign the product from scratch.",
        "ProjectRoles2": "Understood user problems by looking at user feedback, talking to users, & analyzing user behavior with tools like Smartlook.",
        "ProjectRoles3": "Working cross-functionally to define product strategy & roadmaps in collaboration with the Product & Engg. team - while keeping in mind the user and business goals and trying to strike a balance between the two.",
        "ProjectRoles4": "Designing + prototyping solutions and ensuring pixel-perfect implementation of the interface & experience in collaboration with the QA & Engg. team.",
        "ProjectRandomFact": "SellerCrowd was my first remote job and my  first day with the company was at a company-wide yearly meetup in Madrid, Spain 🇪🇸",
        "ProjectTeamSize": "2 PMs, 9 Devs, 3 QAs, 1 Designer (me)",
        "ProjectURL": "www.sellercrowd.com",
      },
    ]

  constructor() { }

  ngOnInit(): void {

  }

}
