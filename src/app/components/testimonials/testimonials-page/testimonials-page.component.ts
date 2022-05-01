import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'component-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.css']
})

export class TestimonialsPageComponent {
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Testimonials');
    this.meta.addTag({ name: 'description', content: 'I’ve been fortunate enough to work with some really smart, humble, kind, and genuine human beings. I feel a comfort to know that they are now my friends more than ex-colleagues, & have trusted me enough to say decently good things about me.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
  ngOnInit(): void { }
}