import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing/landing-page/landing-page.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosComponent } from './components/photos/photos-page/photos-page.component';
import { ProjectsPageComponent } from './components/projects/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'buildinginpublic', component: BuildinginpublicComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
