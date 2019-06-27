import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { MobAppComponent } from './mob-app/mob-app.component';
import { ProjectsGuard } from './projects.guard';
import { WebProjectsService } from './web-projects/web-projects.service';
import { HttpModule } from '@angular/http';
import { MatCardModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    GalleryComponent,
    ProjectsComponent,
    WebProjectsComponent,
    MobAppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatCardModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [
    ProjectsGuard,
    WebProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
