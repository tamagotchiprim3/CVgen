import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      headers: req.headers.set(
        'AUTH_TOKEN',
        'Bearer' + localStorage.getItem('AUTH_TOKEN')
      ),
    });
    return next.handle(newRequest);
  }
}
