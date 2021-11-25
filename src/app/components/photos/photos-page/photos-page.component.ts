import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})

export class PhotosComponent implements OnInit {

  data: any =

    [
      {
        "PhotoName": "Portal",
        "PhotoDescription": "This shot wasn't planned. While driving to our resort, I looked up and immediately identified this minimal frame. Shot quickly on .5x from my iPhone.",
        "PhotoImage": "../assets/photos/2021-11-10-1.jpeg",
        "PhotoLocation": "Jim Corbett, India",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Traingles & curves",
        "PhotoDescription": "I've always found the airplane's fin shot a classic. No matter when and where you take it, it always looks great.",
        "PhotoImage": "../assets/photos/2021-11-15-1.jpeg",
        "PhotoLocation": "IGI Airport, New Delhi",
        "PhotoDateTaken": "November 15, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Rob the builder",
        "PhotoDescription": "On my way to breakfast, spotted this castle getting repaired - resembled the scene from Mission Impossible 3.",
        "PhotoImage": "../assets/photos/2018-10-30-1.jpeg",
        "PhotoLocation": "Lisbon, Portugal",
        "PhotoDateTaken": "October 30, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Praise thy lord",
        "PhotoDescription": "Petrvs statue, near Almudena Cathedral.",
        "PhotoImage": "../assets/photos/2018-01-27-1.jpeg",
        "PhotoLocation": "Madrid, Spain",
        "PhotoDateTaken": "January 27, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Cornerstone",
        "PhotoDescription": "Took on a narrow corridor that led to a kitchen in the palace. One theme about old architecture that I always love is that the narrow & dark paths lead to a brighter place.",
        "PhotoImage": "../assets/photos/2018-10-25-1.jpeg",
        "PhotoLocation": "Palace of Pena, Portugal",
        "PhotoDateTaken": "October 25, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Sun is yellow",
        "PhotoDescription": "Have always found sunlight an amazing source of light that changes pictures dramatically. How your pictures look when it's 7 AM vs. how they look when the sun is right on top of us are completely different and can sometimes make a world of a difference in your photos. Use sunlight to your benefit.",
        "PhotoImage": "../assets/photos/2021-02-13-1.jpeg",
        "PhotoLocation": "Lisbon, Portugal",
        "PhotoDateTaken": "May 9, 2019",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
    ]

  constructor() { }
  ngOnInit(): void { }
}