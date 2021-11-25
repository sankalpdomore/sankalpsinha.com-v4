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
        "PhotoName": "Reaching out",
        "PhotoDescription": "The click was unexpected but I could see a good minimal shot on .5x from my iPhone. Clicked this from my friend's car sunroof",
        "PhotoImage": "../assets/photos/2021-11-10-1.jpeg",
        "PhotoLocation": "Jim Corbett, India",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Traingles & curves",
        "PhotoDescription": "I've always found the airplane's fin shot a classic. No matter when and where you take it, it always looks great",
        "PhotoImage": "../assets/photos/2021-11-15-1.jpeg",
        "PhotoLocation": "IGI Airport, New Delhi",
        "PhotoDateTaken": "November 15, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Rob the builder",
        "PhotoDescription": "During my way to breakfast, spotted this huge castle getting repaired",
        "PhotoImage": "../assets/photos/2019-05-09-3.jpeg",
        "PhotoLocation": "Lisbon, Portugal",
        "PhotoDateTaken": "May 9, 2019",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Praise thy lord",
        "PhotoDescription": "Petrvs statue, near Almudena Cathedral",
        "PhotoImage": "../assets/photos/2018-05-27-1-2.jpeg",
        "PhotoLocation": "Madrid, Spain",
        "PhotoDateTaken": "May 27, 2018",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Cornerstone",
        "PhotoDescription": "Sometimes I just love the assymetry in things that look symmetric from afar. Like in this, the light and the switch isn't vertically aligned. And the Exit sign isn't in the middle of the two. Still they look well balanced.",
        "PhotoImage": "../assets/photos/2019-04-23-1.jpeg",
        "PhotoLocation": "Jim Corbett, India",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Sun is yellow",
        "PhotoDescription": "During my way to breakfast, spotted this huge castle getting repaired",
        "PhotoImage": "../assets/photos/2021-02-13-1.jpeg",
        "PhotoLocation": "Lisbon, Portugal",
        "PhotoDateTaken": "May 9, 2019",
        "PhotoDateUploaded": "November 25, 2021",
        "PhotoAlbums": "Minimal"
      },
      // {
      //   "PhotoName": "Bridging the lines",
      //   "PhotoDescription": "Cropped shot of an old bridge while going to our resort",
      //   "PhotoImage": "../assets/photos/2021-11-10-3.jpeg",
      //   "PhotoLocation": "Jim Corbett, India",
      //   "PhotoDateTaken": "November 10, 2021",
      //   "PhotoDateUploaded": "November 25, 2021",
      //   "PhotoAlbums": "Minimal"
      // },
    ]

  constructor() { }
  ngOnInit(): void { }
}