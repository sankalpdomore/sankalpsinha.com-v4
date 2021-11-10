import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos-tile',
  templateUrl: './photos-tile.component.html',
  styleUrls: ['./photos-tile.component.css']
})

export class PhotosTileComponent implements OnInit {

  @Input()
  name: String

  @Input()
  image: String

  @Input()
  description: String


  constructor() { }
  ngOnInit(): void { }
}