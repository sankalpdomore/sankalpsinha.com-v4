import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'component-buildinginpublic',
  templateUrl: './buildinginpublic.component.html',
  styleUrls: ['./buildinginpublic.component.css']
})

export class BuildinginpublicComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngOnInit(): void { }
  ngAfterViewInit() {

    // Tweets
    let ngJs: any;
    const ngFjs = document.getElementsByTagName('script')[0];
    const ngP = 'https';

    if (!document.getElementById('twitter-wjs')) {
      ngJs = document.createElement('script');
      ngJs.id = 'twitter-wjs';
      ngJs.src = ngP + '://platform.twitter.com/widgets.js';
      ngFjs.parentNode.insertBefore(ngJs, ngFjs);

    }
  }
}