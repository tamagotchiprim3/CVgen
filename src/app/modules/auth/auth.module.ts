import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  declarations: [AuthFormComponent, AuthPageComponent],
})
export class AuthModule {}
