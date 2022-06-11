import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PROJECTSCREATE_PATH,
  PROJECTSEDIT_PATH,
} from 'src/app/shared/constants/routing-path.const';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: ProjectsPageComponent },
  {
    path: PROJECTSEDIT_PATH.path,
    loadChildren: () =>
      import('../projects/pages/projects-edit/projects-edit.module').then(
        (m) => m.ProjectsEditModule
      ),
  },
  {
    path: PROJECTSCREATE_PATH.path,
    loadChildren: () =>
      import('../projects/pages/projects-create/projects-create.module').then(
        (m) => m.ProjectsCreateModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
