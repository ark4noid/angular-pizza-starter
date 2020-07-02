import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'ps-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @ViewChild('form') form: FormGroup;
  model = {
    email: '',
    password: ''
  };
  constructor(private loginService: LoginService) {}
  onSubmit() {
  }
}
