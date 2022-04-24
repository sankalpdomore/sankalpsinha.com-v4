import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'component-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.css']
})
export class TestimonialsPageComponent implements OnInit {
  testimonialsData: any = [];

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get("../assets/testimonials/testimonials.json").subscribe(data => {
      console.log(data);
      this.testimonialsData = data;
    })
  }
}