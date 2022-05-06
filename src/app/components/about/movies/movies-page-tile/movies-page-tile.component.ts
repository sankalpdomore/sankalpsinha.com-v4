import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-movies-page-tile',
  templateUrl: './movies-page-tile.component.html',
  styleUrls: ['./movies-page-tile.component.css']
})

export class MoviesTileComponent implements OnInit {

  @Input()
  MoviesImage: String

  @Input()
  MoviesName: String

  @Input()
  MoviesDescription: String

  @Input()
  MoviesReleasedDate: String

  @Input()
  MoviesWatchedDate: String

  constructor() { }
  ngOnInit(): void { }
}