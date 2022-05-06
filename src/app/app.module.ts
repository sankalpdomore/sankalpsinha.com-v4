//This file defines the features of the angular app//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Import anything new that you've used somewhere else so the typescript knows where to look//
import { NavLightComponent } from './components/navigation-light/navigation-light.component';
import { NavDarkComponent } from './components/navigation-dark/navigation-dark.component';
import { NavDarkestComponent } from './components/navigation-darkest/navigation-darkest.component';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { LandingPageIntroComponent } from './components/landing/landing-page-intro/landing-page-intro.component';
import { LandingPageTestimonialsSectionComponent } from './components/landing/landing-page-testimonials-section/landing-page-testimonials-section.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { ProjectsPageSectionComponent } from './components/projects/projects-page-section/projects-page-section.component';
import { ProjectsPageSectionCardComponent } from './components/projects/projects-page-section-card/projects-page-section-card.component';
import { TestimonialsPageComponent } from './components/testimonials/testimonials-page/testimonials-page.component';
import { TestimonialsPageHeaderComponent } from './components/testimonials/testimonials-page-header/testimonials-page-header.component';
import { TestimonialsPageCardsHalfComponent } from './components/testimonials/testimonials-page-cards-half/testimonials-page-cards-half.component';
import { TestimonialsPageCardsAllComponent } from './components/testimonials/testimonials-page-cards-all/testimonials-page-cards-all.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosPageComponent } from './components/photos/photos-page/photos-page.component';
import { PhotosTileComponent } from './components/photos/photos-tile/photos-tile.component';
import { PhotosModalComponent } from './components/photos/photos-modal/photos-modal.component';
import { MoviesPageComponent } from './components/about/movies/movies-page/movies-page.component';
import { MoviesTileComponent } from './components/about/movies/movies-page-tile/movies-page-tile.component';
import { MobiletempmessageComponent } from './components/mobiletempmessage/mobiletempmessage.component';
import { FooterLightComponent } from './components/footer-light/footer-light.component';
import { FooterDarkComponent } from './components/footer-dark/footer-dark.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  //Declare all the components that you create in the app here//
  declarations: [
    AppComponent,
    NavLightComponent,
    NavDarkComponent,
    NavDarkestComponent,
    LandingPageComponent,
    LandingPageIntroComponent,
    LandingPageTestimonialsSectionComponent,
    ProjectsPageComponent,
    ProjectsPageSectionComponent,
    ProjectsPageSectionCardComponent,
    TestimonialsPageComponent,
    TestimonialsPageHeaderComponent,
    TestimonialsPageCardsHalfComponent,
    TestimonialsPageCardsAllComponent,
    BuildinginpublicComponent,
    PhotosPageComponent,
    PhotosTileComponent,
    PhotosModalComponent,
    MoviesPageComponent,
    MoviesTileComponent,
    MobiletempmessageComponent,
    FooterLightComponent,
    FooterDarkComponent,
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
