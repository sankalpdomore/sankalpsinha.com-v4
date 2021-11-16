import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landing/landingpage/landingpage.component';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { PhotosComponent } from './components/photos/photospage/photospage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'buildinginpublic', component: BuildinginpublicComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
