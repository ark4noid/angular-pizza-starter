import { Component, ViewChild } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { ErrorsService } from 'src/app/core/validation/errors.service';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('form') form: FormGroup;
  model = {
    email: '',
    password: ''
  };
  errors = {
    email: {
      required: 'Email is required',
      email: 'Invalid email'
    },
    password: {
      required: 'Password is required'
    }
  };
  loginError = '';
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    public errorsService: ErrorsService
  ) { }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.loginService.login(this.model)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  }
  private onLoginSuccess = (data: {token: string}) => {
    this.authService.token = data.token;
    this.router.navigateByUrl('/', {replaceUrl: true});
  }
  private onLoginError = (resp: HttpErrorResponse) => {
    const error = resp.status === 401
      ? 'Incorrect credentials'
      : 'Unexpected error';
    this.loginError = error;
  }
}
