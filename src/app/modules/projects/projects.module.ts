import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [ProjectsRoutingModule, CoreModule, BrowserModule, RouterModule],
  declarations: [ProjectsPageComponent],
})
export class ProjectsModule {}
