//This file defines the features of the angular app//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Import anything new that you've used somewhere else so the typescript knows where to look//
import { NavLightComponent } from './components/navigation-light/navigation-light.component';
import { NavDarkComponent } from './components/navigation-dark/navigation-dark.component';
import { NavDarkestComponent } from './components/navigation-darkest/navigation-darkest.component';
import { FooterLightComponent } from './components/footer-light/footer-light.component';
import { FooterDarkComponent } from './components/footer-dark/footer-dark.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { LandingPageIntroComponent } from './components/landing/landing-page-intro/landing-page-intro.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { ProjectsPageSectionComponent } from './components/projects/projects-page-section/projects-page-section.component';
import { ProjectsPageSectionCardComponent } from './components/projects/projects-page-section-card/projects-page-section-card.component';
import { LandingPageTestimonialsSectionComponent } from './components/landing/landing-page-testimonials/landing-page-testimonials-section/landing-page-testimonials-section.component';
import { LandingPageTestimonialsSectionCardComponent } from './components/landing/landing-page-testimonials/landing-page-testimonials-section-cards/landing-page-testimonials-section-card.component';
import { TestimonialsPageComponent } from './components/testimonials/znot-required/testimonials-page.component';
import { TestimonialsPageHeaderComponent } from './components/testimonials/testimonials-page-header/testimonials-page-header.component';
import { MobiletempmessageComponent } from './components/mobiletempmessage/mobiletempmessage.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosComponent } from './components/photos/photos-page/photos-page.component';
import { PhotosTileComponent } from './components/photos/photos-tile/photos-tile.component';
import { PhotosModalComponent } from './components/photos/photos-modal/photos-modal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  //Declare all the components that you create in the app here//
  declarations: [
    AppComponent,
    NavLightComponent,
    NavDarkComponent,
    NavDarkestComponent,
    FooterLightComponent,
    FooterDarkComponent,
    LandingPageComponent,
    LandingPageIntroComponent,
    ProjectsPageComponent,
    ProjectsPageSectionComponent,
    ProjectsPageSectionCardComponent,
    TestimonialsPageComponent,
    TestimonialsPageHeaderComponent,
    LandingPageTestimonialsSectionComponent,
    LandingPageTestimonialsSectionCardComponent,
    BuildinginpublicComponent,
    PhotosComponent,
    PhotosTileComponent,
    PhotosModalComponent,
    MobiletempmessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  //tells angular to search for index.html file to look for this AppComponent//
  bootstrap: [AppComponent]
})
export class AppModule { }
