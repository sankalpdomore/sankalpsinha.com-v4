import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos-tile',
  templateUrl: './photos-tile.component.html',
  styleUrls: ['./photos-tile.component.css']
})

export class PhotosTileComponent implements OnInit {

  @Input()
  image: String

  @Input()
  name: String

  @Input()
  description: String

  @Input()
  location: String

  @Input()
  datetaken: String

  constructor() { }
  ngOnInit(): void { }
}