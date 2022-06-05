import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos-tile-list',
  templateUrl: './photos-tile-list.component.html',
  styleUrls: ['./photos-tile-list.component.css']
})

export class PhotosTileListComponent implements OnInit {

  @Input()
  PhotoImage: String

  @Input()
  PhotoName: String

  @Input()
  PhotoDescription: String

  @Input()
  PhotoLocation: String

  @Input()
  PhotoDateTaken: String

  constructor() { }
  ngOnInit(): void { }

  formPhotoUrl(photoName, dateTaken) {
    console.log(photoName, dateTaken)
    var photoName = photoName.replace(/\s+/g, '-').toLowerCase()
    var dateTaken = dateTaken.replace(',', '')
    dateTaken = dateTaken.replace(/\s+/g, '-').toLowerCase()
    var url = '/photos/' + photoName + '-' + dateTaken
    return url
  }
}