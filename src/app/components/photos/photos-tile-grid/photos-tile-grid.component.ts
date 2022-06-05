import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'component-photos-tile-grid',
  templateUrl: './photos-tile-grid.component.html',
  styleUrls: ['./photos-tile-grid.component.css']
})

export class PhotosTileGridComponent implements OnInit {

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