import { NgModule } from '@angular/core';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

@NgModule({
  imports: [EmployeesRoutingModule],
  declarations: [EmployeesPageComponent],
})
export class EmployeesModule {}
