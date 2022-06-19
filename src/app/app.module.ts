import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import { ReferencesComponent } from './references/references.component';
import { LinksComponent } from './links/links.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResumeComponent } from './resume/resume.component';
import { ContentRowComponent } from './content-row/content-row.component';
import { ContentColumnComponent } from './content-column/content-column.component';
import { SchoolCardComponent } from './school-card/school-card.component';
import { JobCardComponent } from './job-card/job-card.component';
import { ReferenceCardComponent } from './reference-card/reference-card.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { LinkTableComponent } from './link-table/link-table.component';
import { LinkRowComponent } from './link-row/link-row.component';
import { BreadCrumbTrailComponent } from './bread-crumb-trail/bread-crumb-trail.component';
import { ContactConfirmComponent } from './contact-confirm/contact-confirm.component';
import { ReferenceDetailComponent } from './reference-detail/reference-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    EmploymentComponent,
    EducationComponent,
    ReferencesComponent,
    LinksComponent,
    TestimonialsComponent,
    ResumeComponent,
    ContentRowComponent,
    ContentColumnComponent,
    SchoolCardComponent,
    JobCardComponent,
    ReferenceCardComponent,
    CommentCardComponent,
    LinkTableComponent,
    LinkRowComponent,
    BreadCrumbTrailComponent,
    ContactConfirmComponent,
    ReferenceDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
