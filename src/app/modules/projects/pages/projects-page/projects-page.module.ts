import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/modules/core/core.module';
import { ProjectsRoutingModule } from '../../projects-routing.module';
import { ProjectsPageComponent } from './projects-page.component';

@NgModule({
  imports: [],
  declarations: [ProjectsPageComponent],
})
export class ProjectsPageModule {}
