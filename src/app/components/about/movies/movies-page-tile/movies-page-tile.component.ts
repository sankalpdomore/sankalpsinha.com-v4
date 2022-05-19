import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-movies-page-tile',
  templateUrl: './movies-page-tile.component.html',
  styleUrls: ['./movies-page-tile.component.css', './spinner.component.css']
})

export class MoviesTileComponent implements OnInit {
  @Input()
  data: Movies

  constructor() { }
  ngOnInit(): void { }

}

interface Movies {
  MoviesImage: string;
  MoviesName: string
  MoviesTypeMovie: string;
  MoviesTypeTVShow: string;
  MoviesCurrentlyWatching: string;
  MoviesWatched: string;
  MoviesDescription: string,
  MoviesReleasedDate: string,
  MoviesWatchedDate: string,
}