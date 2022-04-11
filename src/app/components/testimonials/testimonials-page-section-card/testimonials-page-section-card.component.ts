import { Component, OnInit, AfterViewInit, Input, Type } from '@angular/core';

@Component({
  selector: 'component-testimonials-page-section-card',
  templateUrl: './testimonials-page-section-card.component.html',
  styleUrls: ['./testimonials-page-section-card.component.css']
})

export class TestimonialsPageSectionCardComponent implements OnInit {

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
