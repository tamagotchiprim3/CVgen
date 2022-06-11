import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PROJECTSCREATE_PATH } from 'src/app/shared/constants/routing-path.const';
import { ProjectsCreateComponent } from './projects-create.component';

const routes: Routes = [
  {
    path: PROJECTSCREATE_PATH.path,
    component: ProjectsCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ProjectsCreateRoutingModule {}
