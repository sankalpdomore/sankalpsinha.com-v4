import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landing/landing-page/landing-page.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosComponent } from './components/photos/photos-page/photos-page.component';
import { LandingProjectsComponent } from './components/landing/projects-section/landing-projects.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'projects', component: LandingProjectsComponent },
  { path: 'buildinginpublic', component: BuildinginpublicComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
