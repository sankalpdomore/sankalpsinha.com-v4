import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-testimonials-page-card',
  templateUrl: './testimonials-page-card.component.html',
  styleUrls: ['./testimonials-page-card.component.css']
})

export class TestimonialsPageCardComponent implements OnInit {

  @Input()
  data: Project

  constructor() { }
  ngOnInit(): void { }

}

interface TestimonialData {
  description: string
}

interface Project {
  testimonialTitle: string;
  testimonialContent: string
  testimonialAuthorImage: string,
  testimonialContentData: TestimonialData,
}
