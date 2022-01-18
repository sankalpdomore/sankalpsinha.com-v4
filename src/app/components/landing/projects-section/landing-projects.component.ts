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
        "ProjectRoles": "I was hired by SellerCrowd during a time when the code + design wasn’t scalable. The company was looking to redesign the product from scratch.",
        "ProjectRandomFact": "SellerCrowd was my first remote job and my  first day with the company was at a company-wide yearly meetup in Madrid, Spain 🇪🇸",
        "ProjectTeamSize": "2 PMs, 9 Devs, 3 QAs, 1 Designer (me)",
        "ProjectURL": "www.sellercrowd.com",
      },
    ]

  constructor() { }

  ngOnInit(): void {

  }

}
