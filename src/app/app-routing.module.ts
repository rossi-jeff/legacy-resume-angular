import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { EmploymentComponent } from './employment/employment.component'
import { EducationComponent } from './education/education.component'
import { ReferencesComponent } from './references/references.component'
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { LinksComponent } from './links/links.component'
import { ResumeComponent } from './resume/resume.component'
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'education', component: EducationComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'references/:uuid', component: ReferenceDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
