import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-footer-light',
  templateUrl: './footer-light.component.html',
})
export class FooterLightComponent implements OnInit {

  onClickGoToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
