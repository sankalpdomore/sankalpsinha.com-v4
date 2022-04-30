import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-footer-dark',
  templateUrl: './footer-dark.component.html',
})
export class FooterDarkComponent implements OnInit {

  onClickGoToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
