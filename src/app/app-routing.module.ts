import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { MobAppComponent } from './mob-app/mob-app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsGuard } from './projects.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [ProjectsGuard]
  },
  {
    path: 'web-projects',
    component: WebProjectsComponent
  },
  {
    path: 'mob-app',
    component: MobAppComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
