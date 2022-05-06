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
        "PhotoName": "Details worth capturing",
        "PhotoDescription": "Got this new webcam called Opal Camera this week. The details & auto-brightness/contrast/saturation on this thing is just mind-blowing. But it does get hot while using. If you're a tech nerd and want to upgrade your webcam situation, do check out this camera. It's pricy, mind you.",
        "PhotoImage": "../assets/photos/2022-03-22-2.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "March 22, 2022",
        "PhotoDateUploaded": "March 22, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Watching the night",
        "PhotoDescription": "Closeup shot of my Apple Watch Series 6",
        "PhotoImage": "../assets/photos/2020-11-22-1.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "November 22, 2020",
        "PhotoDateUploaded": "March 22, 2022",
        "PhotoAlbums": "Minimal"
      },
      {
        "PhotoName": "Mini-nature & massive-tech",
        "PhotoDescription": "Random potrait shot of my iPad Pro. Got this iPad in 2019 from Singapore and have loved the iPad experience since then. Will always recommend anyone thinking of buying an iPad to write or sketch.",
        "PhotoImage": "../assets/photos/2020-11-13-2.jpeg",
        "PhotoLocation": "Bengaluru, India",
        "PhotoDateTaken": "November 13, 2020",
        "PhotoDateUploaded": "March 6, 2022",
        "PhotoAlbums": "Minimal"
      },
    ]

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Photos');
    this.meta.addTag({ name: 'description', content: 'Since the day I got a camera phone, I was hooked on to clicking pictures. With better camera phones and photo sharing apps like Instagram, I shared more pictures. But, lately, Instagram does not feel like a place to share photos anymore. It feels more like an app to create dance and entertainment videos and reach more dopamine addicted users. This page is my reaction to the disappointment Instagram has become. I love clicking pictures and sharing them, and finally, I have a place for them here. 🙌' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void { }
}