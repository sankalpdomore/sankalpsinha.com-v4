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
import { LandingPageProjectsSectionComponent } from './components/landing/landing-page-projects-section/landing-page-projects-section.component';
import { LandingPageTestimonialsSectionComponent } from './components/landing/landing-page-testimonials-section/landing-page-testimonials-section.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { ProjectsPageCardComponent } from './components/projects/projects-page-card/projects-page-card.component';
import { TestimonialsPageComponent } from './components/testimonials/testimonials-page/testimonials-page.component';
import { TestimonialsPageCardsHalfComponent } from './components/testimonials/testimonials-page-cards-half/testimonials-page-cards-half.component';
import { TestimonialsPageCardsAllComponent } from './components/testimonials/testimonials-page-cards-all/testimonials-page-cards-all.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosPageComponent } from './components/photos/photos-page/photos-page.component';
import { PhotosTileGridComponent } from './components/photos/photos-tile-grid/photos-tile-grid.component';
import { PhotosTileListComponent } from './components/photos/photos-tile-list/photos-tile-list.component';
import { MoviesPageComponent } from './components/movies/movies-page/movies-page.component';
import { MoviesTileComponent } from './components/movies/movies-page-tile/movies-page-tile.component';
import { BooksPageComponent } from './components/books/books-page/books-page.component';
import { BooksTileComponent } from './components/books/books-page-tile/books-page-tile.component';
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
    LandingPageProjectsSectionComponent,
    LandingPageTestimonialsSectionComponent,
    ProjectsPageComponent,
    ProjectsPageCardComponent,
    TestimonialsPageComponent,
    TestimonialsPageCardsHalfComponent,
    TestimonialsPageCardsAllComponent,
    BuildinginpublicComponent,
    PhotosPageComponent,
    PhotosTileGridComponent,
    PhotosTileListComponent,
    MoviesPageComponent,
    MoviesTileComponent,
    BooksPageComponent,
    BooksTileComponent,
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
