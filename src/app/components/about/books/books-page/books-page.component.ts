import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})

export class BooksPageComponent implements OnInit {

  booksData: any = [];

  constructor(
    private httpClient: HttpClient,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Books');
    this.meta.addTag({ name: 'description', content: 'Movies, TV shows, and documentories, have always been a doorway to creative thinking for me. Seeing how directors & artists around the world can percieve something so differently and creatively has always been inspiring for me as a creator. That is why I love watching books, TV shows, or any other kind of media. This page is an attempt to capture everything I have watched so far.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void {
    this.httpClient.get("../assets/about/books/books.json").subscribe(data => {
      console.log(data);
      this.booksData = data;
    })
  }
}