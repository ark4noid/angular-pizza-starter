import { Injectable } from '@angular/core';
import { HTTPService } from 'src/app/core/http/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LoginService extends HTTPService {
  constructor(http: HttpClient){
    super(http, 'login');
  }
  login(model){
    return this.http.post(this.resolve(), model, {
      withCredentials: true
    }).toPromise();
  }
}
