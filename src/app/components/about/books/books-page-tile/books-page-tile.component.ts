import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-books-page-tile',
  templateUrl: './books-page-tile.component.html',
  styleUrls: ['./books-page-tile.component.css']
})

export class BooksTileComponent implements OnInit {
  @Input()
  data: Books

  constructor() { }
  ngOnInit(): void { }

}

interface Books {
  BooksImage: string;
  BooksName: string
  BooksTypePaper: string;
  BooksTypeKindle: string;
  BooksCurrentlyReading: string;
  BooksRead: string;
  BooksDescription: string,
  BooksReadDate: string,
}