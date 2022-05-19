import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})

export class MoviesPageComponent implements OnInit {

  moviesData: any = [];

  constructor(
    private httpClient: HttpClient,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Movies & Shows');
    this.meta.addTag({ name: 'description', content: 'Movies, TV shows, and documentories, have always been a doorway to creative thinking for me. Seeing how directors & artists around the world can percieve something so differently and creatively has always been inspiring for me as a creator. That is why I love watching movies, TV shows, or any other kind of media. This page is an attempt to capture everything I have watched so far.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void {
    this.httpClient.get("../assets/about/movies/movies.json").subscribe(data => {
      console.log(data);
      this.moviesData = data;
    })
  }
}