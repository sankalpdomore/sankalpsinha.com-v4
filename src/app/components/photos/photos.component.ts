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
        "name": "Image title",
        "description": "Short description",
        "image": "../assets/photos/2021-11-10-1.jpeg",
        "location": "Location",
        "datetaken": "January 1, 2021",
        "albums": "Minimal"
      },
      {
        "name": "Image title",
        "description": "Short description",
        "image": "../assets/photos/2021-11-10-1.jpeg",
        "location": "Location",
        "datetaken": "November 10, 2021",
        "albums": "Minimal"
      },
      {
        "name": "Image title",
        "description": "Short description",
        "image": "../assets/photos/2021-11-10-1.jpeg",
        "location": "Location",
        "datetaken": "November 10, 2021",
        "albums": "Minimal"
      }
    ]

  constructor() { }
  ngOnInit(): void { }
}