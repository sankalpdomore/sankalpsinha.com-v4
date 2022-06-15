import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';
import { TestimonialsPageComponent } from './components/testimonials/testimonials-page/testimonials-page.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosPageComponent } from './components/photos/photos-page/photos-page.component';
import { MoviesPageComponent } from './components/movies/movies-page/movies-page.component';
import { BooksPageComponent } from './components/books/books-page/books-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'testimonials', component: TestimonialsPageComponent },
  { path: 'buildinginpublic', component: BuildinginpublicComponent },
  { path: 'photos', component: PhotosPageComponent },
  { path: 'movies', component: MoviesPageComponent },
  { path: 'books', component: BooksPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
