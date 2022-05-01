import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Product designer & maker for 10+ yrs');
    this.meta.addTag({ name: 'description', content: 'A multi-disciplinary entrepreneurial mindset Product Designer, passionately designing & building software from concept to launch, for over 10 years.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void { }

}
