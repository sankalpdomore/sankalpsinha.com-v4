//To use features in an Angular app, we import the features here for them get included in the app//
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//this code starts the angluar app in the browser//
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
