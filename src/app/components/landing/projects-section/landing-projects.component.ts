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
        "ProjectRoles": [
          "I was hired by SellerCrowd during a time when the code + design wasn’t scalable. The company was looking to redesign the product from scratch.",
          "Understood user problems by looking at user feedback, talking to users, & analyzing user behavior with tools like Smartlook.",
          "Working cross-functionally to define product strategy & roadmaps in collaboration with the Product & Engg. team - while keeping in mind the user and business goals and trying to strike a balance between the two.",
          "Designing + prototyping solutions and ensuring pixel-perfect implementation of the interface & experience in collaboration with the QA & Engg. team."
        ],
        "ProjectRandomFact": "SellerCrowd was my first remote job and my  first day with the company was at a company-wide yearly meetup in Madrid, Spain 🇪🇸",
        "ProjectTeamSizePMs": "4 PMs,",
        "ProjectTeamSizeDevs": "25 Devs,",
        "ProjectTeamSizeQAs": "8 QAs,",
        "ProjectTeamSizeDesigners": "6 Designers",
        "ProjectURL": "www.vwo.com",
      },
    ]

  constructor() { }

  ngOnInit(): void {

  }

}
