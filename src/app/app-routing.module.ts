import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiographyComponent } from './biography/biography.component'
import { ResumeComponent } from './resume/resume.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'biography', component: BiographyComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
