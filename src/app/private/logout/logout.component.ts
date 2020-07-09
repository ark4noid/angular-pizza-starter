import { Component } from '@angular/core';
import { LogoutService } from './logout.service';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ps-logout',
  templateUrl: './logout.component.html',
  providers: [LogoutService]
})
export class LogoutComponent {
  constructor(
    private logoutService: LogoutService,
    private authService: AuthService,
    private router: Router
  ) { }
  onClick() {
    this.logout();
  }
  logout() {
    this.logoutService.logout()
      .then(this.onLogoutSuccess)
      .catch(this.onLogoutError);
  }
  onLogoutSuccess = () => {
    this.authService.clear();
    this.router.navigateByUrl('/public', { replaceUrl: true });
  }
  onLogoutError = (res: HttpErrorResponse) => {
    if (res.status === 401) {
      this.onLogoutSuccess();
    } else {
      console.error(res);
    }
  }
}
