import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'component-testimonials-page-section',
  templateUrl: './testimonials-page-section.component.html',
  styleUrls: ['./testimonials-page-section.component.css']
})
export class TestimonialsPageSectionComponent implements OnInit {
  testimonialsData: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("../assets/testimonials/testimonials.json").subscribe(data => {
      console.log(data);
      this.testimonialsData = data;
    })
  }
}