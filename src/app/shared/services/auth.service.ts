import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormData } from '../interfaces/route-config.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public postData(url: string, formData: IFormData): Observable<any> {
    return this.http.post(url, {
      email: formData.email,
      password: formData.password,
    });
  }
  getToken(): string {
    return localStorage.getItem('AUTH_TOKEN');
  }

  isAuthentificated(): boolean {
    return !!localStorage.getItem('AUTH_TOKEN');
  }

  isExpired(): boolean {
    return new Date().getTime() > +localStorage.getItem('EXPIRES_IN');
  }
}
