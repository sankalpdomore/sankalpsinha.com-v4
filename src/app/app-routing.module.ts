import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildinginpublicComponent } from './components/buildinginpublic/buildinginpublic.component';
import { LandingpageComponent } from './components/landing/landingpage/landingpage.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'buildinginpublic', component: BuildinginpublicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
