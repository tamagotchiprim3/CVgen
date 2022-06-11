import { NgModule } from '@angular/core';
import { DashboardModule } from '../dashboard/dashboard.module';
import { EmployeesModule } from '../employees/employees.module';
import { ProjectsModule } from '../projects/projects.module';
import { GlobalHeaderModule } from './components/global-header/global-header.module';
import { SideBarModule } from './components/side-bar/side-bar.module';
import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    DashboardModule,
    EmployeesModule,
    ProjectsModule,
    GlobalHeaderModule,
    SideBarModule,
  ],
  declarations: [CorePageComponent],
})
export class CoreModule {}
