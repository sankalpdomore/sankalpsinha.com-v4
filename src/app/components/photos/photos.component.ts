import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {

  data: any =

    [
      {
        "PhotoName": "Reaching out",
        "PhotoDescription": "The click was unexpected but I could see a good minimal shot on .5x from my iPhone. Clicked this from my friend's car sunroof",
        "PhotoImage": "../assets/photos/2021-11-10-1.jpeg",
        "PhotoLocation": "Jim Corbett",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 14, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Lighting up the exit",
        "PhotoDescription": "Sometimes I just love the assymetry in things that look symmetric from afar. Like in this, the light and the switch isn't vertically aligned. And the Exit sign isn't in the middle of the two. Still they look well balanced.",
        "PhotoImage": "../assets/photos/2021-11-10-2.jpeg",
        "PhotoLocation": "Jim Corbett",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 14, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Bridging the lines",
        "PhotoDescription": "Cropped shot of an old bridge while going to our resort",
        "PhotoImage": "../assets/photos/2021-11-10-3.jpeg",
        "PhotoLocation": "Jim Corbett",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 14, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Reaching out",
        "PhotoDescription": "The click was unexpected but I could see a good minimal shot on .5x from my iPhone. Clicked this from my friend's car sunroof",
        "PhotoImage": "../assets/photos/2021-11-10-1.jpeg",
        "PhotoLocation": "Jim Corbett",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 14, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Lighting up the exit",
        "PhotoDescription": "Sometimes I just love the assymetry in things that look symmetric from afar. Like in this, the light and the switch isn't vertically aligned. And the Exit sign isn't in the middle of the two. Still they look well balanced.",
        "PhotoImage": "../assets/photos/2021-11-10-2.jpeg",
        "PhotoLocation": "Jim Corbett",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 14, 2021",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Bridging the lines",
        "PhotoDescription": "Cropped shot of an old bridge while going to our resort",
        "PhotoImage": "../assets/photos/2021-11-10-3.jpeg",
        "PhotoLocation": "Jim Corbett",
        "PhotoDateTaken": "November 10, 2021",
        "PhotoDateUploaded": "November 14, 2021",
        "PhotoAlbums": "Minimal"
      },
    ]

  constructor() { }
  ngOnInit(): void { }
}