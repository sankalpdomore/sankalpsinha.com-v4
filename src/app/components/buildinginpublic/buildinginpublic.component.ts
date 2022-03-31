import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-buildinginpublic',
  templateUrl: './buildinginpublic.component.html',
  styleUrls: ['./buildinginpublic.component.css']
})

export class BuildinginpublicComponent implements OnInit, AfterViewInit {
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Building In Public');
    this.meta.addTag({ name: 'description', content: 'I am building this website in public. To keep things simple and as transparent as possible, I’ve added (& will keep adding) links to all the work that I am doing that includes, wireframing, userflows, documenting ideas, writing UX requirements, designing, coding the site, and its analytics.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
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