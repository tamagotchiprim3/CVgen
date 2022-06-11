import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROJECTSEDIT_PATH } from 'src/app/shared/constants/routing-path.const';
import { ProjectsEditComponent } from './projects-edit.component';

const routes: Routes = [
  {
    path: PROJECTSEDIT_PATH.path,
    component: ProjectsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProjectsEditRoutingModule {}
