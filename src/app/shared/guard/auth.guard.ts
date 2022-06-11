import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AUTH_PATH } from '../constants/routing-path.const';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isAuthentificated()) {
      this.router.navigate([AUTH_PATH.path]);
    }
    console.log(this.authService.isAuthentificated());
    return this.authService.isAuthentificated();
  }
}
