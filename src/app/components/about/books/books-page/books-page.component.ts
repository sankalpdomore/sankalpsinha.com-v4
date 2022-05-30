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
    this.meta.addTag({ name: 'description', content: 'I grew up around books and have always been reading them on topics that interest me. I started reading more self-help books on productivity, design, business, marketing, work-life balance, etc. when I went to college. This page is an attempt to log all my read books.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void {
    this.httpClient.get("../assets/about/books/books.json").subscribe(data => {
      console.log(data);
      this.booksData = data;
    })
  }
}