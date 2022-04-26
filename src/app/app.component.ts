import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  onActive() {
    window.scroll(0, 0);
  }
  constructor(
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle('Sankalp Sinha • Product designer & maker for 10+ yrs');
    this.meta.addTag({ name: 'description', content: 'A multi-disciplinary entrepreneurial mindset Product Designer, passionately designing & building software from concept to launch, for over 10 years.' });
    this.meta.addTag({ name: 'keywords', content: '' });
  }
}
