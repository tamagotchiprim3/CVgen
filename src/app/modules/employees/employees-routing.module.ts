import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

const routes: Routes = [{ path: '', component: EmployeesPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
