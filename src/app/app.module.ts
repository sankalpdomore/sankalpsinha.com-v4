//This file defines the features of the angular app//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing the app component we created in the app.component.ts file//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Import anything new that you've used somewhere else so the typescript knows where to look//
// import { OwlModule } from 'ngx-owl-carousel';
import { NavComponent } from './components/navigation/navigation.component';
import { LandingIntroComponent } from './components/landing/intro/landing-intro.component';
import { BuildinginpublicComponent } from './components//buildinginpublic/buildinginpublic.component';

@NgModule({
  //Declare all the components that you create in the app here//
  declarations: [
    AppComponent,
    NavComponent,
    LandingIntroComponent,
    BuildinginpublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  //tells angular to search for index.html file to look for this AppComponent//
  bootstrap: [AppComponent]
})
export class AppModule { }
