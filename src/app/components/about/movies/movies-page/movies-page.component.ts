import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})

export class MoviesPageComponent implements OnInit {

  data: any =

    [
      {
        "MoviesName": "Doctor Strange in the Multiverse of Madness",
        "MoviesImage": "../assets/about/movies/doctorstrangeinthemultiverseofmadness.jpg",
        "MoviesDescription": "Sam Raimi, the director of the movie overdid the horror part. The movie didn't feel like the typical light-hearted Marvel movie that I go to theaters for.",
        "MoviesWatchedDate": "May 6, 2022",
        "MoviesReleasedDate": "May 6, 2022",
      },
      {
        "MoviesName": "Constantine",
        "MoviesImage": "../assets/about/movies/constantine.jpg",
        "MoviesDescription": "Okish direction. Watched it only for Keanu Reeves.",
        "MoviesWatchedDate": "May 3, 2022",
        "MoviesReleasedDate": "February 25, 2005",
      },
      {
        "MoviesName": "WeCrashed",
        "MoviesImage": "../assets/about/movies/wecrashed.jpg",
        "MoviesDescription": "The story telling & acting by Jared Leto & Anne Hathaway is on point. A MUST WATCH if you're interested in either well documented stories & startups.",
        "MoviesWatchedDate": "April 28, 2022",
        "MoviesReleasedDate": "March 18, 2022",
      },
      {
        "MoviesName": "SpiderMan: No way home",
        "MoviesImage": "../assets/about/movies/spidermannowayhome.jpg",
        "MoviesDescription": "Marvel's best multiverse movie so far as it was able to pull off the unimaginable task of brining all previous Spiderman & their counterparts in one movie. Very well executed storyline.",
        "MoviesWatchedDate": "December 18, 2021",
        "MoviesReleasedDate": "December 16, 2021",
      },
      {
        "MoviesName": "Finch",
        "MoviesImage": "../assets/about/movies/finch.jpg",
        "MoviesDescription": "Upbeat and hopeful storytelling",
        "MoviesWatchedDate": "December 13, 2021",
        "MoviesReleasedDate": "November 5, 2021",
      },
      {
        "MoviesName": "13 Hours",
        "MoviesImage": "../assets/about/movies/13hours.jpg",
        "MoviesDescription": "Loved the fact that it didn't have an all-star cast back then and still all the actors felt perfect for their roles. The action sequences were directed to feel real 100%.",
        "MoviesWatchedDate": "May 24, 2021",
        "MoviesReleasedDate": "January 15, 2016",
      }
    ]

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Movies');
    this.meta.addTag({ name: 'description', content: 'Movies, TV shows, and documentories, have always been a doorway to creative thinking for me. Seeing how directors & artists around the world can percieve something so differently and creatively has always been inspiring for me as a creator. That is why I love watching movies, TV shows, or any other kind of media. This page is an attempt to capture everything I have watched so far.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void { }
}