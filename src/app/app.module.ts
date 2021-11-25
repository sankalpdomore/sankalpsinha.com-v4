//This file defines the features of the angular app//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Importing the app component we created in the app.component.ts file//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Import anything new that you've used somewhere else so the typescript knows where to look//
import { NavComponent } from './components/navigation/navigation.component';
import { NavLightComponent } from './components/navigation-light/navigation-light.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landing/landing-page/landing-page.component';
import { LandingIntroComponent } from './components/landing/intro/landing-intro.component';
import { MobiletempmessageComponent } from './components/mobiletempmessage/mobiletempmessage.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosComponent } from './components/photos/photos-page/photos-page.component';
import { PhotosTileComponent } from './components/photos/photos-tile/photos-tile.component';
import { PhotosModalComponent } from './components/photos/photos-modal/photos-modal.component';

@NgModule({
  //Declare all the components that you create in the app here//
  declarations: [
    AppComponent,
    NavComponent,
    NavLightComponent,
    FooterComponent,
    LandingpageComponent,
    LandingIntroComponent,
    MobiletempmessageComponent,
    BuildinginpublicComponent,
    PhotosComponent,
    PhotosTileComponent,
    PhotosModalComponent,
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
