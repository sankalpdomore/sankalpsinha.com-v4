import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.css']
})

export class PhotosPageComponent implements OnInit {

  photosData: any = [];

  constructor(
    private httpClient: HttpClient,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Photos');
    this.meta.addTag({ name: 'description', content: 'Since the day I got a camera phone, I was hooked on to clicking pictures. With better camera phones and photo sharing apps like Instagram, I shared more pictures. But, lately, Instagram does not feel like a place to share photos anymore. It feels more like an app to create dance and entertainment videos and reach more dopamine addicted users. This page is my reaction to the disappointment Instagram has become. I love clicking pictures and sharing them, and finally, I have a place for them here. 🙌' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void {
    this.httpClient.get("../assets/photos/photos.json").subscribe(data => {
      console.log(data);
      this.photosData = data;
    })
  }
}