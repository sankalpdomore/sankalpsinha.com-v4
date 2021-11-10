import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})

export class PhotosComponent implements OnInit {

  data: any =
    [{
      "name": "Vishal",
      "description": "xyz",
      "image": "https://sankalpsinha.com/assets/buildinginpublic/figma-files-landing-page-1.png"
    },
    {
      "name": "Sankalp",
      "description": "abc",
      "image": "https://sankalpsinha.com/assets/buildinginpublic/figma-files-landing-page-1.png"
    }
      ,
    {
      "name": "Rahul",
      "description": "xyz",
      "image": "https://sankalpsinha.com/assets/buildinginpublic/figma-files-landing-page-1.png"
    },
    {
      "name": "Aditya",
      "description": "abc",
      "image": "https://sankalpsinha.com/assets/buildinginpublic/figma-files-landing-page-1.png"
    }]

  @Input()
  name: String

  @Input()
  image: String

  @Input()
  description: String


  constructor() { }
  ngOnInit(): void { }
}