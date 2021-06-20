import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { LandingIntroComponent } from './components/landing/intro/landing-intro.component';

const routes: Routes = [
  { path: '', component: LandingIntroComponent },
  { path: 'buildinginpublic', component: BuildinginpublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
