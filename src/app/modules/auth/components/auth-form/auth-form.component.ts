import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  public authForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.authForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public submit() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      return;
    }
    this.authService
      .postData('https://innowise-cv-generator.herokuapp.com/auth/login', {
        email: this.authForm.get('username').value,
        password: this.authForm.get('password').value,
      })
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem('AUTH_TOKEN', data.accessToken);
        localStorage.setItem(
          'EXPIRES_IN',
          String(+data.expiresIn + new Date().getTime())
        );
        this.router.navigate(['']);
        this.authForm.reset();
      });
  }
}
